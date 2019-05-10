const commandLineArgs = require('command-line-args');
const loadGrid = require('./load-grid');
const solve = require('./solve');
const validate = require('./validate');

const options = commandLineArgs([
  { name: 'debug', alias: 'd', type: Boolean },
  {
    name: 'puzzle',
    type: String,
    defaultValue: '20190220a',
    defaultOption: true,
  },
]);

const grid = loadGrid(`../puzzles/${options.puzzle}.sudoku`);

if (options.debug) {
  console.log(grid);
}

solve(grid, options);

if (options.debug) {
  console.log(
    validate(grid)
      ? 'It’s a valid solution!'
      : 'Noooooooooooooooooooooooooooooooooooooo'
  );
}
