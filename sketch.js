var mic;
var amp;
var scale;

function setup() {
  createCanvas(440, 440);
  background(0);
    mic = new p5.AudioIn();
    mic.start();
    amp = new p5.Amplitude();
    amp.setInput(mic);
  sl = new SockLib("127.0.0.1", 9999);
  sl.sendmsg("sphere -n \"new_sphere\";");
}

function draw() {
  noStroke();
    fill(0, 10);
    rect(0, 0, width, height);
    scale = map(amp.getLevel(), 0, 1.0, 10, width);
    fill(255);
    ellipse(mouseX, mouseY, scale, scale);
    scaleMaya(scale, scale, scale);

}

function scaleMaya(scale, scale, scale) {

  sl.sendmsg("scale -r ;");

}

function mouseMoved() {
  var x = (mouseX-width/2) *0.1;
  var y = (mouseY-height/2)*0.1;

  sl.sendmsg("move -a -os -wd "+x+" "+y+" 0 ;");
}
