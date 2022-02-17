class Obstacle{
    constructor (ctx){
        this.ctx =ctx;
        this.obsHeight = 10
        this.obsWidth = 80
        this.x = Math.random() * Canvas.obsWidth
        this.y = 0
    }
    drawObstacle = () => {
        this.ctx.fillRect (this.x, 
            this.y, this.obswidth, this.obsHeight)
    }
    moveObstacle = () => {
        this.y += 10
        console.log (code)
    }
}