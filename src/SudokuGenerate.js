import {getContainedInRow, getContainedInColumn, getContainedInBlock} from './js/contained.js';

const GenerateGrid = (difficulty) => {
    const grid = [];

    for (let i=0; i<9; i++) {
        grid[i] = [];
        for (let j=0; j<9; j++) {
            
        }
    }

    let givenCells;
    switch (difficulty) {
        case 'easy':
            givenCells = 62;
            break;
        case 'medium':
            givenCells = 53;
            break;
        case 'hard':
            givenCells = 44;
            break;
        case 'robot':
            givenCells = 17;
            break;
        default:
            givenCells = 62;
    }

    while (givenCells !== 0) {
        let row;
        let column;
        let num;
        let rowContained;
        let columnContained;
        let blockContained;
        let contained;
    
        do {
            row = getRandomIntMax(9);
            column = getRandomIntMax(9);
        } while (grid[row][column] !== 0);
    
        do {
            num = getRandomIntMinMax(1,9);
            rowContained = getContainedInRow(grid, row);
            columnContained = getContainedInColumn(grid, column);
            blockContained = getContainedInBlock(grid, Math.floor(row / 3), Math.floor(column / 3));
            contained = new Set([...rowContained, ...columnContained, ...blockContained]);
        } while (contained.has(num) && contained.size < 9);
    }
    return grid;
}

// Returns random int from 0 to 'max' with max being exclusive
// Use this for true randomness
const getRandomIntMax = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

// Returns random int from 'min' to 'max' with both being inclusive
// Use this for controlled difficulty
const getRandomIntMinMax = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default GenerateGrid;