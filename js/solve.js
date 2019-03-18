const fs = require('fs');
const _ = require('lodash');
const {
  getContainedInRow,
  getContainedInColumn,
  getContainedInBlock,
} = require('./contained');
const { N, INDEXES, VALUES, BLOCK_INDEXES, toBlockIndex } = require('./common');

function getPrettyRow(row) {
  return _.chain(row)
    .map(_.toString)
    .join(' ')
    .value();
}

function getPrettyGrid(grid) {
  return _.chain(grid)
    .map(getPrettyRow)
    .join('\n')
    .value();
}

function getEmptyCountInRow(row) {
  return _.filter(row, cell => cell === 0).length;
}

function solve(grid, options) {
  const rowSets = _.map(INDEXES, rowIndex => getContainedInRow(grid, rowIndex));
  const columnSets = _.map(INDEXES, columnIndex =>
    getContainedInColumn(grid, columnIndex)
  );
  const blockSets = _.map(BLOCK_INDEXES, blockRowIndex =>
    _.map(BLOCK_INDEXES, blockColumnIndex =>
      getContainedInBlock(grid, blockRowIndex, blockColumnIndex)
    )
  );

  function getBlockSetAt(cellPosition) {
    const [blockRowIndex, blockColumnIndex] = _.map(cellPosition, toBlockIndex);
    return blockSets[blockRowIndex][blockColumnIndex];
  }

  function forEachEmptyCell(fn) {
    for (let rowIndex = 0; rowIndex < N; rowIndex++) {
      const row = grid[rowIndex];

      for (let columnIndex = 0; columnIndex < N; columnIndex++) {
        const cellValue = row[columnIndex];

        if (cellValue === 0) {
          fn(cellValue, [rowIndex, columnIndex]);
        }
      }
    }
  }

  // The "Only Place When Fosho" Algorithm™ ️

  function canPlace(value, position) {
    const [rowIndex, columnIndex] = position;
    return (
      !rowSets[rowIndex].has(value) &&
      !columnSets[columnIndex].has(value) &&
      !getBlockSetAt(position).has(value)
    );
  }

  function getCandidateValuesAt(position) {
    return _.filter(VALUES, value => canPlace(value, position));
  }

  let emptyCellCount = _.sumBy(grid, getEmptyCountInRow);

  function place(value, position) {
    const [rowIndex, columnIndex] = position;
    grid[rowIndex][columnIndex] = value;

    rowSets[rowIndex].add(value);
    columnSets[columnIndex].add(value);
    getBlockSetAt(position).add(value);

    --emptyCellCount;
  }

  for (let i = 1; emptyCellCount > 0; ++i) {
    forEachEmptyCell((_cell, position) => {
      const cellCandidates = getCandidateValuesAt(position);

      if (cellCandidates.length === 1) {
        const [candidateValue] = cellCandidates;
        place(candidateValue, position);
      }
    });

    if (options.debug) {
      console.log('\n');
      console.log(grid);

      const gridString = getPrettyGrid(grid);
      fs.writeFileSync(`./stage-${i}.txt`, gridString);
    }
  }
}

module.exports = solve;
