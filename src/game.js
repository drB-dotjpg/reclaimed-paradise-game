var player, cam;
var objects;

function setup() {
    createCanvas(1280, 720);
    loadImages();

    player = new Player();
    cam = new Camera();

    objects = {
        player: player,
    };

    for(let i = 0; i<50; i++) {
        objects["plant"+i] = new Plant(Math.random()*1000, Math.random()*1000);
    }
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