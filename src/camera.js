class Camera {
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    update() {
        this.x = player.x - width / 2;
        this.y = player.y - height / 2;
    }

    draw() {
        translate(-this.x, -this.y);
    }
}