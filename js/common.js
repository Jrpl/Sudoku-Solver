const _ = require('lodash');

const BASE = 3;
const N = BASE * BASE;
const INDEXES = _.range(N);
const BLOCK_INDEXES = _.range(BASE);
const VALUES = _.range(1, N + 1);

function toBlockIndex(cellIndex) {
  return Math.floor(cellIndex / BASE);
}

module.exports = {
  BASE,
  N,
  INDEXES,
  BLOCK_INDEXES,
  VALUES,
  toBlockIndex,
};
