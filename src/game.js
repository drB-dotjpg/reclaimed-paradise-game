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
    console.log(cam.x, cam.y);
    cam.update();

    //draw a grid 
    for (let i = 0; i < width; i += 100) {
        for (let j = 0; j < height; j += 100) {
            stroke(0);
            strokeWeight(1);
            line(i, 0, i, height);
            line(0, j, width, j);
        }
    }
}