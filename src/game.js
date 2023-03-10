var heatMap = [[],[]];
var humidityMap = [[],[]];

var worldMap;
var objects;
var player, cam;

function setup() {
    createCanvas(1280, 720);
    loadImages();

    worldMap = new Map();

    //load map noise
    for (let x = 0; x < worldMap.width; x+=10) {
        heatMap[x/10] = [];
        humidityMap[x/10] = [];
        for (let y = 0; y < worldMap.height; y+=10) {
            heatMap[x/10][y/10] = worldMap.getMapNoise(x, y);
            humidityMap[x/10][y/10] = worldMap.getMapNoise(x - worldMap.width, y - worldMap.height);
        }
    }

    player = new Player();
    cam = new Camera();

    objects = {
        player: player,
    };

    for(let i = 0; i<50; i++) {
        objects["plant"+i] = new Plant(Math.random()*worldMap.width, Math.random()*worldMap.height);
    }
}

function draw() {
    background(220);    
    translate(-cam.x, -cam.y);

    //draw the map noise
    for (let x = 0; x < worldMap.width; x+=100) {
        for (let y = 0; y < worldMap.height; y+=100) {
            const heatNoise = heatMap[x/10][y/10];
            const humidityNoise = humidityMap[x/10][y/10];
            //using HSB color mode, hue is heat, saturation is humidity, brightness is 100
            colorMode(HSB);
            fill(heatNoise / 1.5, humidityNoise / 3, 255);
            rect(x, y, 100, 100);
        }
    }

    colorMode(RGB);

    for (const property in objects) {
        objects[property].update();
        objects[property].draw(camera);
    }

    cam.update();
}