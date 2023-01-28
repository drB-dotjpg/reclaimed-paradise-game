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

    draw () {
        fill(255, 0, 0);
        circle(this.x, this.y, this.width);
    }
    
    keyDown (event) {
        if (event.key === "ArrowUp") {
            this.yVelocity = -this.speed;
        }
        if (event.key === "ArrowDown") {
            this.yVelocity = this.speed;
        }
        if (event.key === "ArrowLeft") {
            this.xVelocity = -this.speed;
        }
        if (event.key === "ArrowRight") {
            this.xVelocity = this.speed;
        }
    }

    keyUp (event) {
        if (event.key === "ArrowUp") {
            this.yVelocity = 0;
        }
        if (event.key === "ArrowDown") {
            this.yVelocity = 0;
        }
        if (event.key === "ArrowLeft") {
            this.xVelocity = 0;
        }
        if (event.key === "ArrowRight") {
            this.xVelocity = 0;
        }
    }
}