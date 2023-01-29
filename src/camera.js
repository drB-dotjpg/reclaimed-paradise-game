class Camera {
    constructor() {
        this.x = worldMap.width/2;
        this.y = worldMap.height/2;
    }

    update() {
        this.x = ((objects.player.x - width / 2)+this.x*20)/21;
        this.y = ((objects.player.y - height / 2)+this.y*20)/21;
    }
}