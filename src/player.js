class Player {
    constructor () {
        this.x = 1280/2;
        this.y = 720/2;
        this.width = 50;
        this.speed = 5;
        this.xVelocity = 0;
        this.yVelocity = 0;

        document.addEventListener("keydown", this.keyDown.bind(this));
        document.addEventListener("keyup", this.keyUp.bind(this));
    }

    update () {
        this.x += this.xVelocity;
        this.y += this.yVelocity;
    }

    draw (camera) {
        fill(255, 0, 0);
        circle(this.x , this.y, this.width);
    }
    
    keyDown (event) {
        if (event.key === "w") {
            this.yVelocity = -this.speed;
        }
        if (event.key === "s") {
            this.yVelocity = this.speed;
        }
        if (event.key === "a") {
            this.xVelocity = -this.speed;
        }
        if (event.key === "d") {
            this.xVelocity = this.speed;
        }
    }

    keyUp (event) {
        if (event.key === "w") {
            this.yVelocity = 0;
        }
        if (event.key === "s") {
            this.yVelocity = 0;
        }
        if (event.key === "a") {
            this.xVelocity = 0;
        }
        if (event.key === "d") {
            this.xVelocity = 0;
        }
    }
}