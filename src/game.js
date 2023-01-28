var player = new Player();
var plant = new Plant();
var camera = new Camera();

var objects = {
    player: player,
    camera: camera,
    plant: plant
};

function setup() {
    createCanvas(1280, 720);
    loadImages();
}

function draw() {
    background(220);
    for (const property in objects) {
        objects[property].update();
        objects[property].draw();
    }
}