
var theWorld;
var ref;

var thePlayer;

var theGame;
//let the size of each tile be 50x50


var worldParameters = {
  tileSize: 50,
  tileFolder: 'labTiles',
  numTiles: 64,
  tileMap: [
    [59, 57, 59, 60,  59,  61, 59, 62, 59, 63],
    [60, 59, 57,  59,  60,  59,  61,  59,  62, 59],
    [59, 60, 0, 0,  0,  0, 0, 0, 59, 62],
    [61, 59, 0, 0,  0,  0, 0, 0,  61, 59],
    [59, 61, 0, 0,  0,  0, 0, 0, 59, 61],
    [62, 59, 0, 0,  0,  0, 0, 0,  60, 59],
    [59, 62, 0, 0,  0,  0, 0, 0, 59, 60],
    [63, 59, 0, 0,  0,  0, 0, 0,  57, 59],
    [59, 63, 59, 62,  59,  61, 59, 60, 59, 57],
    [57, 59, 63,  59,  62,  59,  61,  59,  60, 59],
  ],
  solidTiles: {},

  canvasTiles: {0:true},

};

function preload() {
  theWorld = new OverheadWorld(worldParameters);
  thePlayer = new Player(100, 100, theWorld);
}

function setup() {
  theCanvas = createCanvas(500,500)
  theCanvas.style('display', 'block');
  theCanvas.style('margin', 'auto');
  theGame = new Game2();
}

function draw() {
  theWorld.displayWorld();
  theGame.display();
  thePlayer.display();
  thePlayer.move();


  // theGame.draw();
}

//function runs once every time the mouse is pressed
function keyPressed() {
  //clear the canvas
  // background(255)
  theGame.paint();

}


class Game2 {
  constructor() {
    this.world = theWorld;
    this.player = thePlayer;
    this.color = color(random(255), random(255), random(255))

  }

  display() {
    fill(255)
    rect(100,100,300,300);
  }

  paint(){
    if(thePlayer.canvasInteract) {
      if ((key == 'J') || (key == 'j')) {
        console.log('hi')
        fill(this.color)
        ellipse(mouseX, mouseY, 7, 7)
      }
      if ((key == 'F') || (key == 'f')) {
        //fill(this.color)
        console.log('hello')
        fill(0)
        ellipse(250,250, 10,10)
        //ellipse(random(1,3),random(1,3), thePlayer.x, thePlayer.y)
      }
      if ((this.key == 'G') || (this.key == 'g')) {
        fill(this.color)
        rect(random(2,5), random(2,5), thePlayer.x, thePlayer.y)
      }
      if ((this.key == 'H') || (this.key == 'h')) {
        fill(this.color)
        triangle(thePlayer.x, thePlayer.y, thePlayer.x + 20, thePlayer.y, thePlayer.x + 10, thePlayer.y - 20)
      }
    }
  }
}

//the player passes and advances 50% of the time — if the player fails,
//the player has to redo the painting
// if(random(0,100) > 50) {
//   //painting passes
//   text("Congratulations! Your painting was selected into the art show and you will now advance to the next room.", 400,100);
// }
// else {
//   //painting fails, user has to redo it
//   text("We regret to inform you that your painting did not meet the art show qualifications; please redo your painting to advance to the next room.", 400,100)
// }
