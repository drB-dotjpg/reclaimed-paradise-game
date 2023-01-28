var player = new Player();
var plant = new Plant();

function setup() {
    createCanvas(1280, 720);
    loadImages();
}

function draw() {
    background(220);
    player.draw();
    plant.draw();
}