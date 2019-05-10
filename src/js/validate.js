const _ = require('lodash');
const { INDEXES } = require('./common');

function validate(grid) {
  return (
    _.every(grid, isRowValid) &&
    _.every(INDEXES, i => isColumnValid(grid, i)) &&
    _.every(INDEXES, i => isBlockValid(grid, i))
  );
}

function isGroupValid(values) {
  const set = new Set(values);
  return !set.has(0) && set.size === 9;
}

function isRowValid(row) {
  return isGroupValid(row);
}

function isColumnValid(grid, columnIndex) {
  return isGroupValid(_.map(grid, row => row[columnIndex]));
}

function isBlockValid(grid, blockIndex) {
  const blockRow = Math.floor(blockIndex / 3);
  const blockColumn = blockIndex % 3;

  const rowStart = 3 * blockRow;
  const columnStart = 3 * blockColumn;

  const blockCells = _.chain(grid)
    .slice(rowStart, rowStart + 3)
    .map(row => _.slice(row, columnStart, columnStart + 3))
    .flatten()
    .value();

  return isGroupValid(blockCells);
}

module.exports = validate;
