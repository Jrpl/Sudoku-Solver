const _ = require('lodash');
const { BASE } = require('./common');

function getContainedInRow(grid, rowIndex) {
  const matches = new Set();
  const currentRow = grid[rowIndex];
  _.forEach(currentRow, cell => {
    if (cell !== 0) {
      matches.add(cell);
    }
  });
  return matches;
}

function getContainedInColumn(grid, columnIndex) {
  const matches = new Set();
  _.forEach(grid, row => {
    const cell = row[columnIndex];
    if (cell !== 0) {
      matches.add(cell);
    }
  });
  return matches;
}

function getContainedInBlock(grid, blockRowIndex, blockColumnIndex) {
  const matches = new Set();
  const rowStart = blockRowIndex * BASE;
  const columnStart = blockColumnIndex * BASE;
  for (let r = rowStart; r < rowStart + 3; r++) {
    for (let c = columnStart; c < columnStart + 3; c++) {
      const cell = grid[r][c];
      if (cell !== 0) {
        matches.add(cell);
      }
    }
  }
  return matches;
}

module.exports = {
  getContainedInRow,
  getContainedInColumn,
  getContainedInBlock,
};
