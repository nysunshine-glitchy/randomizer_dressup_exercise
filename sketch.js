//ref https://editor.p5js.org/tstannard64/sketches/r16fKQq5i for id and keypress method
//song
let song;

// background
let bg1;
let bg2;
let bg3;

//gui up,down,left,right,enter
let ukey;
let dkey;
let lkey;
let rkey;
let ekey;
let skey;
let dbox;
let fatfont;


//variables for shuffle options
let base;
let eye1;
let eye2;
let eye3;
let eye4;
let mouth1;
let mouth2;
let mouth3;
let mouth4;
let mouth5;
let hat1;
let hat2;
let hat3;
let hat4;
let outfit1;
let outfit2;

////variable to the id options (try this method later)
let eye_id;
let mouth_id;
let hat_id;
let shirt_id;
let bg_id;

//preload loads our assets before the program runs
function preload() {
  song = loadSound('assets/4 PM - Animal Crossing.mp3');
  ukey = loadImage("assets/KeyUp.png");
  dkey = loadImage("assets/KeyDown.png");
  lkey = loadImage("assets/KeyLeft.png");
  rkey = loadImage("assets/KeyRight.png");
  ekey = loadImage("assets/KeyEnter.png");
  skey = loadImage("assets/KeyS.png")
  dbox = loadImage("assets/DialogueBoxSimple.png");
  normfont = ("assets/NormalFont.ttf");
  
  base = loadImage("assets/base 1.png");
  //eyes
  eye1 = loadImage("assets/eye1.png");
  eye2 = loadImage("assets/eye2.png");
  eye3 = loadImage("assets/eye3.png");
  eye4 = loadImage("assets/eye4.png");
  //hats
  hat1 = loadImage("assets/hat1.png");
  hat2 = loadImage("assets/hat2.png");
  hat3 = loadImage("assets/hat3.png");
  hat4 = loadImage("assets/hat4.png");
  //mouths
  mouth1 = loadImage("assets/mouth1.png");
  mouth2 = loadImage("assets/mouth2.png");
  mouth3 = loadImage("assets/mouth3.png");
  mouth4 = loadImage("assets/mouth4.png");
  mouth5 = loadImage("assets/mouth5.png");
  //shirts
  shirt1 = loadImage("assets/shirt1.png");
  shirt2 = loadImage("assets/shirt2.png");

  bg1 = loadImage("assets/fishbackground.gif");
  bg2 = loadImage("assets/bg2.gif");
  bg3 = loadImage("assets/bg3.gif");
  fatfont = loadFont("assets/FatPix-SVG.ttf");
}

function setup() {
  createCanvas(600, 350);
}

function mousePressed(){
  if (song.isPlaying()){
    song.stop();
  } else {
    song.play();
  } //ref https://editor.p5js.org/p5/sketches/Sound:_Load_and_Play_Sound
}

function draw() {
  
  background(255, 204, 196);
  //image(bg1,0,0,600,400);

 
  console.log(mouseX, mouseY);
  frameRate(24); // randomize slower
  //bg
  if (bg_id == 1) {
    image(bg1, 0, 0, 600, 400);
  } else if (bg_id == 2) {
    image(bg2, 0, 0, 600, 400);
  } else if (bg_id == 3) {
    image(bg3, 0, 0, 600, 400);
  }
//image(dbox,40,40, 200, 285)
   image(base, 10, 20);//draw character
  //eyes
  if (eye_id == 1) {
    image(eye1, 10, 20);
  } else if (eye_id == 2) {
    image(eye2, 10, 20);
  } else if (eye_id == 3) {
    image(eye3, 10, 20);
  } else if (eye_id == 4) {
    image(eye4, 10, 20);
  }
  //mouths
  if (mouth_id == 1) {
    image(mouth1, 10, 20);
  } else if (mouth_id == 2) {
    image(mouth2, 10, 20);
  } else if (mouth_id == 3) {
    image(mouth3, 10, 20);
  } else if (mouth_id == 4) {
    image(mouth4, 10, 20);
  } else if (mouth_id == 5) {
    image(mouth5, 10, 20);
  }

  //hat
  if (hat_id == 1) {
    image(hat1, 10, 20);
  } else if (hat_id == 2) {
    image(hat2, 10, 20);
  } else if (hat_id == 3) {
    image(hat3, 10, 20);
  } else if (hat_id == 4) {
    image(hat4, 10, 20);
  }
  //shirts
  if (shirt_id == 1) {
    image(shirt1, 10, 20);
  } else if (shirt_id == 2) {
    image(shirt2, 10, 20);
  }

  //controls
  //keyIsDown allows user to hold
  //left for eyes
  if (keyIsDown(LEFT_ARROW)) {
    shuffleEyes();
  } //right for hats
  if (keyIsDown(RIGHT_ARROW)) {
    shuffleHats();
  }
  if (keyIsDown(UP_ARROW)) {
    shuffleMouths();
  }
  if (keyIsDown(DOWN_ARROW)) {
    shuffleShirts();
  }
  if (keyIsDown(ENTER)) {
    shufflebg();
  }
  
  
  image(dbox,260,70, 330,140);
  image(dkey,400,290,50,50);
  image(ukey,400,235,50,50);
  image(lkey,340,290,50,50);
  image(rkey,460,290,50,50);
  image(ekey,530,290,50,50);
  image(skey,270,290,50,50);
  
  //font source https://ngndang.itch.io/fat-pix-font
  
 
  fill(255,154,138);
  strokeWeight(4)
  textSize(25); 
  stroke(240);
  textFont(fatfont);
  text("hey! it's fishin time!", 280, 110);
  text("get ready with the", 280, 135); text ("arrows and enter keys", 280, 160)
   text ("press s to save", 280, 185)
  
  
}

//custom function to reshuffle elements
function shuffleEyes() {
  eye_id = int(random(1, 5));
}

function shuffleHats() {
  hat_id = int(random(1, 5));
}

function shuffleMouths() {
  mouth_id = int(random(1, 6));
}

function shuffleShirts() {
  shirt_id = int(random(1, 3));
}

function shufflebg() {
  bg_id = int(random(1, 4));
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    save('goinfishin.png');
    //reference line 43 here https://editor.p5js.org/jeffThompson/sketches/gru9uL-Pp
  }
  
}
