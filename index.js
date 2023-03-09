let lines = [];
let isDrawing = false;
let isDrawingLines = false;
let clearClicked = false;
let startX, startY;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  slider = createSlider(0, 360, 60, 0);
  slider.position(10, 10);
  slider.style('width', '100px');
  
  
  //Save Button
  saveButton = createButton('Save!');
  saveButton.position(200, 10);
  saveButton.mousePressed(saveArt);
  
  //Clear Button
  clearButton = createButton('Clear!');
  clearButton.position(400, 10);
  clearButton.mousePressed(clearisPressed);
  
  //Line Button
  lineButton = createButton('Line!');
  lineButton.position(600, 10);
  lineButton.mousePressed(lineIsPressed);
  
}

function draw() {
  clear();
  val = slider.value();
  background(val, 40, 100, 1);
  if (isDrawingLines == true){
    drawLine();
  }
  if (clearClicked == true) {
    clearArt();
  }

}

function saveArt() {
  saveCanvas(canvas, 'myCanvas', 'jpg');
}

function clearisPressed() {
  clearClicked = true;
  
}

function clearArt() {
  lines = [];
  clearClicked = false;
  
}

function lineIsPressed() {
  isDrawingLines = true;
}

function drawLine() {
    if (mouseIsPressed) {
    if (isDrawing) {
      lines.push({
        startX: mouseX,
        startY: mouseY,
        endX: pmouseX,
        endY: pmouseY,
      });
    }
 
    isDrawing = true;
  }

  if (isDrawing) {
    stroke(0);
    line(startX, startY, mouseX, mouseY);
  }
  
  for (const lin of lines) {
    line(lin.startX, lin.startY, lin.endX, lin.endY);
  }
}
