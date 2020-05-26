//Select size input 
const changeSize = document.getElementById('sizePicker');
let height =  document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;
// Select grid input
const grid = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
changeSize.addEventListener('submit', function(event) {
  // Takes the value from the HTML and saves it into the variables
  event.preventDefault();
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
});

function makeGrid(height, width) {
  // When submit button is clicked, resets the grid
  grid.innerHTML = "";
  // Creates rows
  for (var x = 0; x < height; x++) {
    let row = grid.insertRow(x);
    // Creates columns
    for (var y = 0; y < width; y++) {
      let cell = row.insertCell(y);
      // Changes the color of the pixels
      cell.addEventListener('click', changeColor);
    }
  }
}

// Changes the color of the pixels
function changeColor (event) {
  // Select color input 
  const color = document.getElementById('colorPicker').value;
  event.target.style.backgroundColor = color;
  event.preventDefault();
}

// When size is submitted by the user, call makeGrid()
makeGrid(height, width);
