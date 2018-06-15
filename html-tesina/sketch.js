var osc;
var button;
var button2;
var button3;
var button4;
var slider;

function setup() {
  var a = createCanvas(400, 400);
  fft = new p5.FFT();
  background(51);
  button = createButton("Sine");
  button2 = createButton("Saw");
  button3 = createButton("Square");
  button4 = createButton("Triangle");
  button.mousePressed(togglePlaying1);
  button2.mousePressed(togglePlaying2);
  button3.mousePressed(togglePlaying3);
  button4.mousePressed(togglePlaying4);

  /*slider = createSlider(0, 1200, 440);*/

  osc = new p5.Oscillator();
  playing = false;
}

function togglePlaying1() {
  osc.setType('sine');
  osc.freq(1244.51);
  osc.amp(0);
  if(!playing){
    osc.start();
    osc.amp(0.5, 0.05);
    playing = true;
    button.html("Stop");
  }
  else{
    osc.amp(0, 0.1);
    playing = false;
    button.html("Sine");
  }

}

function togglePlaying2() {
  osc.setType('sawtooth');
  osc.freq(240);
  osc.amp(0);
  if(!playing){
    osc.start();
    osc.amp(0.5, 0.05);
    playing = true;
    button2.html("Stop");
  }
  else{
    osc.amp(0, 0.1);
    playing = false;
    button2.html("Saw");
  }
}

function togglePlaying3() {
  osc.setType('square');
  osc.freq(240);
  osc.amp(0);
  if(!playing){
    osc.start();
    osc.amp(0.5, 0.05);
    playing = true;
    button3.html("Stop");
  }
  else{
    osc.amp(0, 0.1);
    playing = false;
    button3.html("Square");
  }
}

function togglePlaying4() {
  osc.setType('triangle');
  osc.freq(240);
  osc.amp(0);
  if(!playing){
    osc.start();
    osc.amp(0.5, 0.05);
    playing = true;
    button4.html("Stop");
  }
  else{
    osc.amp(0, 0.1);
    playing = false;
    button4.html("Triangle");
  }
}

/*function toggleWave() {
  if(w = "sine"){
    osc.setType('sawtooth');
  }
  if(w = "sawtooth"){
    osc.setType('square');
  }
  if(w = "square"){
    osc.setType('triangle');
  }
  if(w = "triangle"){
    osc.setType('sine');
  }
}
*/
function draw() {



  background(51);
  var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255,255,0); // waveform is red
  strokeWeight(2);
  for (var i = 0; i< waveform.length/8; i++){
    var x = map(i, 0, waveform.length/8, 0, width);
    var y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
}
/*
function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
    if (!playing) {
      // ramp amplitude to 0.5 over 0.05 seconds
      osc.amp(0.5, 0.05);
      playing = true;
      backgroundColor = color(0,255,255);
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      osc.amp(0, 0.5);
      playing = false;
      backgroundColor = color(255,0,255);
    }
  }
}
*/
