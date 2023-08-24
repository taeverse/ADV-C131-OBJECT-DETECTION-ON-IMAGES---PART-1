img = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() {
    img = loadImage("image for canvas.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);

    fill("#FF0000");
    text("hello kitty", 45, 75);
    stroke("#FF0000");
    noFill();
    rect(30, 60, 450, 350);
}