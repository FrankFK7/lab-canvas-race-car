class Game {
    constructor (ctx) {
        this.ctx = ctx;
        this.road =new Image();
        this.road.src = '../images/road.png'
        this.car = new Car (this.ctx);
        this.frame = 0;
        this.obstacle = new Obstacle (this.ctx);
        }
        drawRoad = () =>{
            this.ctx.drawImage(this.road,0, 0, canvas.width, canvas.height);
        };

        drawEverything = () =>{
            this.drawRoad();

            this.drawCar();
            this.obstacle.drawObstacle();
            this.Obstacle.moveObstacle();
            this.frame++;
            if(this.frame % 100 ===0)
            requestAnimationFrame(this.drawEverything);
            console.log (code);

        }
}