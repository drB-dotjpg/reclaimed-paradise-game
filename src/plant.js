class Plant {
    constructor(type){
        this.type = type || "lil' plant";
        this.height = 100;
        this.waviness = 0.1;
    }
    draw(){
        //draw leaf image with p5js
        // url is img/leaf.png
        image(images["leaf0"].img, 0, 0);
    }
}