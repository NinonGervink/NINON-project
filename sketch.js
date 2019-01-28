var image1;
var bg;
var rSlider, gSlider, bSlider;
var x = 1;
var y = 1;
var r = 0;
var a = 0;
var z = 0;
var song;
var sliderVolume;
var sliderRate;
var capture;


function setup() {
    bg = loadImage("assets/background.png");
    image1 = loadImage("assets/lasers.JPG");

    background(bg);
    tint(255,0,125);
      song = loadSound('assets/music.mp3');
      
  createCanvas(1366, 800);
  capture = createCapture(VIDEO);
  capture.size(270, 270);

    // create sliders
  rSlider = createSlider(0, 255, 0);
  rSlider.position(350, 140);
  gSlider = createSlider(0, 255, 255);
  gSlider.position(350, 180);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(350, 220);
  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderVolume.position (20,20);
  sliderRate = createSlider(0, 2, 1, 0.01);
  sliderRate.position (20,60);


}


function draw() {


rectMode(CORNER);

fill(0);

rect(0,0,1366,800);
image(bg, 0, 0);

//N2 WEBCAM
image(capture, 480, 270, 200, 200);
fill(7,0,11);
 triangle(520, 500, 520, 350, 620, 500);
  triangle(630, 240, 630, 370, 550, 250); 

fill(255);
text('click to play/pause and slide for volume', sliderVolume.x * 2 + sliderVolume.width, 35);
text('click to play/pause and slide for speed', sliderRate.x * 2 + sliderRate.width, 75);

function mousePressed() { getAudioContext().resume() }



  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  fill (r, g, b);
  
// I
  rect(390,270,43,200,10);

//N 3 DISCO
  fill( random(255), random(155), random(155), random(155)); 
  rect(960,280,180,180);
  rect(950,270,200,200);
  fill(11,0,13);
  triangle(990, 500, 990, 350, 1090, 500);
  triangle(1100, 270, 1100, 370, 1020, 250);




//muis
  stroke(7,0,11);
  strokeWeight(35);
  if (mouseIsPressed === false) {
    line(mouseX, mouseY, pmouseX, pmouseY);
     
  }

  
  // N1 link
 noStroke()
  if (mouseX > 160 && mouseX < 200 && 
       mouseY > 270 && mouseY < 470) {
  fill(255);
  rect(160,270, 40, 200,0,0,10,10);}
   else {
  fill(102);
    rect(160,270, 40, 200,0,0,10,10);
  }

// schuin
  if (mouseIsPressed){
    fill(255);
  }
  else {
    fill(random(237),34,93);
  }
   quad(160, 270, 200, 270, 340, 468, 300, 470);
  

//N1 rechts
  fill(166,0, 83);
    if (keyIsPressed === true){
    fill(64,0,64);
  } else {
    fill(255);
  }




  // O rotate  
  rect(300,270,43,200,10,10,10,0);
if (keyIsPressed === true){
    fill(237,34,93);
  } else {
    fill(25);
  }
rectMode(CENTER);
  translate(width/1.675, height/2.18);
  rotate(a);
  rect(0, 0, 190, 190 ,50);
  a = a + 0.03
//kleine roze
fill(237,34,93);
 rotate(z);
  rect(0, 0, 80, 80,20);
  z = z + -0.05
}


{


function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.pause();
 
  } else {
    song.play();
     song.setVolume(sliderVolume.value());
    song.rate(sliderRate.value());

  }
}
{  


}

  
}


 
 
 


