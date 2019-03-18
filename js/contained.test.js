const {
  getContainedInRow,
  getContainedInColumn,
  getContainedInBlock,
} = require('./contained');

const grid = [
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

describe('getContainedInRow', () => {
  it('should find the unique numbers in row 0', () => {
    expect(getContainedInRow(grid, 0)).toEqual(new Set([7, 9, 1, 2, 4, 5]));
  });

  it('should find the unique numbers in row 1', () => {
    expect(getContainedInRow(grid, 1)).toEqual(new Set([3, 4, 2, 9]));
  });

  it('should find the unique numbers in row 2', () => {
    expect(getContainedInRow(grid, 2)).toEqual(new Set([1, 9, 5, 8]));
  });

  it('should find the unique numbers in row 3', () => {
    expect(getContainedInRow(grid, 3)).toEqual(new Set([6, 3, 9, 1, 8]));
  });

  it('should find the unique numbers in row 4', () => {
    expect(getContainedInRow(grid, 4)).toEqual(new Set([7, 3, 2]));
  });

  it('should find the unique numbers in row 5', () => {
    expect(getContainedInRow(grid, 5)).toEqual(new Set([5, 1, 4, 3]));
  });

  it('should find the unique numbers in row 6', () => {
    expect(getContainedInRow(grid, 6)).toEqual(new Set([7, 5, 2]));
  });

  it('should find the unique numbers in row 7', () => {
    expect(getContainedInRow(grid, 7)).toEqual(new Set([4, 9, 5, 3, 8]));
  });

  it('should find the unique numbers in row 8', () => {
    expect(getContainedInRow(grid, 8)).toEqual(new Set([1, 2, 8, 4]));
  });
});

describe('getContainedInColumn', () => {
  it('should find the unique numbers in column 0', () => {
    expect(getContainedInColumn(grid, 0)).toEqual(new Set([7, 6, 4, 1]));
  });

  it('should find the unique numbers in column 1', () => {
    expect(getContainedInColumn(grid, 1)).toEqual(new Set([9, 3, 5, 7]));
  });

  it('should find the unique numbers in column 2', () => {
    expect(getContainedInColumn(grid, 2)).toEqual(new Set([1, 3, 7, 9]));
  });

  it('should find the unique numbers in column 3', () => {
    expect(getContainedInColumn(grid, 3)).toEqual(new Set([4, 1, 3, 2]));
  });

  it('should find the unique numbers in column 4', () => {
    expect(getContainedInColumn(grid, 4)).toEqual(new Set([9, 1, 5, 8]));
  });

  it('should find the unique numbers in column 5', () => {
    expect(getContainedInColumn(grid, 5)).toEqual(new Set([2, 5, 9, 4, 3]));
  });

  it('should find the unique numbers in column 6', () => {
    expect(getContainedInColumn(grid, 6)).toEqual(new Set([2, 5, 8, 4]));
  });

  it('should find the unique numbers in column 7', () => {
    expect(getContainedInColumn(grid, 7)).toEqual(new Set([4, 2, 8, 1, 3]));
  });

  it('should find the unique numbers in column 8', () => {
    expect(getContainedInColumn(grid, 8)).toEqual(new Set([5, 9, 8, 2]));
  });
});

describe('getContainedInBlock', () => {
  it('should find the unique numbers in block (0, 0)', () => {
    expect(getContainedInBlock(grid, 0, 0)).toEqual(new Set([7, 9, 1, 3]));
  });

  it('should find the unique numbers in block (0, 1)', () => {
    expect(getContainedInBlock(grid, 0, 1)).toEqual(new Set([2, 4, 1, 9, 5]));
  });

  it('should find the unique numbers in block (0, 2)', () => {
    expect(getContainedInBlock(grid, 0, 2)).toEqual(new Set([4, 5, 2, 9, 8]));
  });

  it('should find the unique numbers in block (1, 0)', () => {
    expect(getContainedInBlock(grid, 1, 0)).toEqual(new Set([6, 3, 7, 5]));
  });

  it('should find the unique numbers in block (1, 1)', () => {
    expect(getContainedInBlock(grid, 1, 1)).toEqual(new Set([9, 3, 1, 4]));
  });

  it('should find the unique numbers in block (1, 2)', () => {
    expect(getContainedInBlock(grid, 1, 2)).toEqual(new Set([1, 8, 2, 3]));
  });

  it('should find the unique numbers in block (2, 0)', () => {
    expect(getContainedInBlock(grid, 2, 0)).toEqual(new Set([7, 4, 9, 1]));
  });

  it('should find the unique numbers in block (2, 1)', () => {
    expect(getContainedInBlock(grid, 2, 1)).toEqual(new Set([5, 3, 2, 8]));
  });

  it('should find the unique numbers in block (2, 2)', () => {
    expect(getContainedInBlock(grid, 2, 2)).toEqual(new Set([5, 2, 8, 4]));
  });
});
