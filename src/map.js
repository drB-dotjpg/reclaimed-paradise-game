class Map {
    constructor() {
        this.width = 5000;
        this.height = 2812;
    }

    //function to get noise at a specific point
    getMapNoise(x, y) {
        //return noise from 0 to 255
        return noise(x / 1500, y / 1500) * 255;
    }
}