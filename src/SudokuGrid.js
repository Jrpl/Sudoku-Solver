import React from 'react';
const SudokuGrid = ({ grid }) => (
    <div className="App-puzzle">
            <div className="App-puzzle-column">
              { [0, 1, 2].map(row => (
                <div className= "App-puzzle-row">
                { [0, 1, 2].map(column => (
                  <div className="App-puzzle-block">
                  <div className="App-puzzle-column">
                    { [0, 1, 2].map(innerRow => (
                      <div className="App-puzzle-row">
                        { [0, 1, 2].map(innerColumn => (
                          <p className="App-puzzle-box">{grid[innerRow + (row * 3)][innerColumn + (column * 3)]}</p>
                        )) }
                      </div>
                    )) }
                  </div>
                </div>
                ))  }
              </div>
              ))}
            </div>
          </div>
);
export default SudokuGrid;