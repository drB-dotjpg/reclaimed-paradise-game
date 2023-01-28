var player = new Player();

function setup() {
    createCanvas(1280, 720);
}

function draw() {
    background(220);
    player.update();
    player.draw();
}