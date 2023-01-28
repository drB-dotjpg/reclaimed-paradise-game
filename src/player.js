class Player {
    constuctor () {
        this.x = 600;
        this.y = 600;
        this.width = 50;
        this.height = 50;
        this.speed = 5;
    }

    draw () {
        fill(255, 0, 0);
        rect(this.x, this.y, this.width, this.height);
    }
    
    update () {
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.speed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.speed;
        }
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.speed;
        }
    }
}