var player = new Player();
var camera = new Camera();

var objects = {
    player: player,
    camera: camera
};

function setup() {
    createCanvas(1280, 720);
}

function draw() {
    background(220);
    for (const property in objects) {
        objects[property].update();
        objects[property].draw();
    }
}