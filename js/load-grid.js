const fs = require('fs');
const _ = require('lodash');

function loadGrid(filename) {
  const fileContent = fs.readFileSync(filename).toString();

  return _.chain(fileContent)
    .split('\n')
    .map(line => _.split(line, ''))
    .map(line => _.map(line, _.toNumber))
    .value();
}

module.exports = loadGrid;