const loadGrid = require('./load-grid');

describe('loadGrid', () => {
  const grid = loadGrid('../puzzles/20190220a.sudoku');

  const referenceGrid = [
    [7, 9, 1, 0, 0, 2, 0, 4, 5],
    [0, 0, 3, 4, 0, 0, 0, 2, 9],
    [0, 0, 0, 1, 9, 5, 0, 8, 0],
    [6, 3, 0, 0, 0, 9, 0, 1, 8],
    [0, 0, 7, 3, 0, 0, 2, 0, 0],
    [0, 5, 0, 0, 1, 4, 0, 3, 0],
    [0, 7, 0, 0, 0, 0, 5, 0, 2],
    [4, 0, 9, 0, 5, 3, 8, 0, 0],
    [1, 0, 0, 2, 8, 0, 4, 0, 0],
  ];
  
  it('should load the grid well', () => {
    expect(grid).toEqual(referenceGrid);
  });
});
