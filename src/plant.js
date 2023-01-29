class Plant {
    constructor(x, y){
        this.type = "lil' plant";
        
        this.waviness = 0.1;
        this.x = x || 0;
        this.y = y || 0;
        this.seed = Math.floor(Math.random()*100000);
        this.frame = 0;
        noiseSeed(this.seed);
        
        this.wiggleSpeed = random(0.03, 0.06)*0.75;
        this.height = random(50, 300);
        this.offset = random(0, Math.PI*2);

        this.leafs = [];
        let numLeafs = Math.floor(random(3, 10));
        for(let i = 0; i<numLeafs; i++) {
            this.leafs.push((random()*2-1)*this.height);
        }
        this.leafs.sort((a,b)=>{
            return Math.abs(a)-Math.abs(b)
        })

        

        noiseSeed(Math.floor(Math.random()*1000000)); // reset noise seed
    }
    draw(){

        //translate(0, 0);
        //rotate(PI / 180 * 45+this.frame*0.01);
        //image(images["leaf0"].img, 0, 0);
        //translate(-width / 2, -height / 2);
        
        let lastX = this.x;
        let lastY = this.y;

        push();
        strokeWeight(10);
        stroke("#4fb064");

        let leafdraws = [];
        let leafcount = 0;
        for(let i = 0; i<=this.height; i+=5) {
            let y = -i*(Math.sin(this.offset+this.frame*this.wiggleSpeed*2.2+i/this.height*0.3*Math.PI)+5)/7 + this.y;
            
            let x = Math.sin(this.offset+this.frame*this.wiggleSpeed+i/this.height*0.7*Math.PI)*this.waviness*this.height*Math.atan(i/10) + this.x;
            
            strokeWeight(10-i/this.height*5);
            //stroke("#4ef279");
            //line(lastX+2, lastY, x+2, y);
            stroke("#4fb064");
            line(lastX, lastY, x, y);

            if(i > Math.abs(this.leafs[leafcount])) {
                //console.log(i/this.height, this.leafs[leafdraws.length])
                let sign = Math.sign(this.leafs[leafcount]);
                leafdraws.push([x-(i/this.height*5)*sign, y, lastX-x, lastY-y, sign]); // x, y, xv, yv, flip
                leafcount++;
            }

            lastX = x;
            lastY = y;

        }
        pop();

        for(let i in leafdraws){
            let leaf = leafdraws[i];
            push();
            translate(leaf[0], leaf[1]);
            scale(leaf[4], 1);
            rotate(leaf[3]*0.2-1.6);
            image(images["leaf0"].img, 0, 0);
            pop();
        }

        
    }
    update(){
        this.frame++;
    }
}