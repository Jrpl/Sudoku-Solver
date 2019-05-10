import React, { Component } from 'react';
import robot from './robot.png';
import './App.css';
import SudokuGrid from './SudokuGrid';
import SudokuGenerate from './SudokuGenerate';

// const referenceGrid = [
//   [7, 9, 1, 0, 0, 2, 0, 4, 5],
//   [0, 0, 3, 4, 0, 0, 0, 2, 9],
//   [0, 0, 0, 1, 9, 5, 0, 8, 0],
//   [6, 3, 0, 0, 0, 9, 0, 1, 8],
//   [0, 0, 7, 3, 0, 0, 2, 0, 0],
//   [0, 5, 0, 0, 1, 4, 0, 3, 0],
//   [0, 7, 0, 0, 0, 0, 5, 0, 2],
//   [4, 0, 9, 0, 5, 3, 8, 0, 0],
//   [1, 0, 0, 2, 8, 0, 4, 0, 0],
// ];

const grid = SudokuGenerate('easy');

class App extends Component {
  render() {

    for (let i=0; i < grid.length; i++) {
      for (let j=0; j < grid[i].length; j++) {
        if (grid[i][j] === 0) {
          grid[i][j] = ' ';
        }
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Sudoku Solver</h1>
          <SudokuGrid grid={ grid } />
          <p>
            Generate a puzzle
          </p>
          <div className="App-button-row">
            <button className="App-button">Easy</button>
            <button className="App-button">Medium</button>
            <button className="App-button">Hard</button>
            <button className="App-button"><img src={robot} className="Img-robot" alt="robot"></img></button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
