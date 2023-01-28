var objects = {
    player: new Player(),
    camera: new Camera()
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