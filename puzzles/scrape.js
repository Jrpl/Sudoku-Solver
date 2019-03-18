rowStrings = [];
document.querySelectorAll('.sudoku-grid > table > tbody > tr').forEach(row => {
  const cells = row.querySelectorAll('td .guess');
  const numbers = [];
  cells.forEach(cell => numbers.push(cell.textContent || ' '));
  rowStrings.push(numbers.join(''));
});
console.log(rowStrings.join('\n'));
