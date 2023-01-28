var player = new Player();
var plant = new Plant();
var cam = new Camera();

var objects = {
    player: player,
    plant: plant
};

function setup() {
    createCanvas(1280, 720);

    loadImages();
}

function draw() {
    background(220);
    translate(-cam.x, -cam.y);
    for (const property in objects) {
        objects[property].update();
        objects[property].draw(camera);
    }
    cam.update();
}