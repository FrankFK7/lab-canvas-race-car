class car {
    constructor(){
        this.ctx. = ctx;
        this.carHeight = 100
        this.carwidth = 80
        this.x = canvas.width / 2
        this.y = canvas.height - this.carHeight-
        this.carImg = new Image()
        this.carImg.src = '../image/car.png'
    }
    drawCar = () => {
        this.ctx .drawImage (this.carImg, this.x, this.y, this.carwidth, this.carHeight)
    }
    controls = (code) => {
        console.log (car)
    }
}