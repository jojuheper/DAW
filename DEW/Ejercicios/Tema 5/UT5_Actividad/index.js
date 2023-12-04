//Definición de la clase Ball para representar la bola en el juego 
class Ball {
    constructor(ctx, x, y, radius, dx, dy) {
        this.ctx = ctx; //Contexto de dibujo en el lienzo 
        this.x = x; //Posición en el eje x 
        this.y = y; //Posición en el eje y 
        this.radius = radius; //Radio de la bola 
        this.dx = dx; //Velocidad en el eje x 
        this.dy = dy; //Velocidad en el eje y 
    }
    //Método para dibujar la bola en el lienzo 
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

//DefinicióndelaclasePaddlepararepresentarlapaletaenel juego 
class Paddle {
    constructor(ctx, x, y, width, height) {
        this.ctx = ctx; //Contextodedibujoenel lienzo 
        this.x = x; //Posiciónenelejex 
        this.y = y; //Posiciónenelejey 
        this.width = width; //Anchodelapaleta 
        this.height = height; //Alturadelapaleta 
    }
    //Métodoparadibujarlapaletaenel lienzo 
    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

//DefinicióndelaclaseBrickpararepresentarunladrilloenel juego 
class Brick {
    constructor(ctx, x, y, width, height) {
        this.ctx = ctx; //Contextodedibujoenel lienzo 
        this.x = x; //Posiciónenelejex 
        this.y = y; //Posiciónenelejey 
        this.width = width; //Anchodel ladrillo 
        this.height = height; //Alturadel ladrillo 
        this.status = 1; //Estadodel ladrillo(activo o inactivo)
    } //Métodoparadibujarunladrilloenel lienzo 
    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

//DefinicióndelaclaseGameparamanejarlalógicadel juego 
class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId); //ElementocanvasenelHTML 
        this.ctx = this.canvas.getContext("2d"); //Contextodedibujoenel lienzo 
        this.ball = new Ball(this.ctx, this.canvas.width / 2, this.canvas.height - 30, 10, 2, -2); // Instanciadelabola 
        this.paddle = new Paddle(this.ctx, (this.canvas.width - 75) / 2, this.canvas.height - 10, 75, 10); // Instanciadelapaleta 
        this.bricks = this.createBricks(); //Matrizdeinstanciasdeladrillos 
        this.rightPressed = false; //Estadodelatecladerechapresionada 
        this.leftPressed = false; //Estadodelateclaizquierdapresionada 
        this.score = 0; //Puntuacióndel jugador 
        this.lives = 3; //Vidasrestantesdel jugador 
        //Agregarevent listenersparalasteclas 
        document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
        document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
        //Llamar al método draw repetidamente cada 10 milisegundos 
        setInterval(this.draw.bind(this), 10);
    }


    //Método para crear la matriz de instancias de ladrillos 
    createBricks() {
        let bricks = [];
        for (let c = 0; c < 6; c++) {
            bricks[c] = [];
            for (let r = 0; r < 3; r++) {
                //Ajusteenlasfórmulasparacalcularlasposiciones 
                let brickX = c * (75 + 10) + 30;
                let brickY = r * (20 + 10) + 30;
                bricks[c][r] = new Brick(this.ctx, brickX, brickY, 75, 20);
            }
        }
        return bricks;
    }

    //Métodoparamanejareleventodeteclapresionada 
    keyDownHandler(e) {
        if (e.keyCode == 39) {
            this.rightPressed = true;
        } else if (e.keyCode == 37) {
            this.leftPressed = true;
        }
    }

    //Métodoparamanejareleventodeteclaliberada 
    keyUpHandler(e) {
        if (e.keyCode == 39) {
            this.rightPressed = false;
        } else if (e.keyCode == 37) {
            this.leftPressed = false;
        }
    }

    //Métodoparadetectarcolisionesconlosladrillos 
    collisionDetection() {
        for (let c = 0; c < 5; c++) {
            for (let r = 0; r < 3; r++) {
                let b = this.bricks[c][r];
                if (b.status === 1) {
                    if (this.ball.x > b.x && this.ball.x < b.x + b.width && this.ball.y > b.y && this.ball.y < b.y + b.height) {
                        this.ball.dy = -this.ball.dy;
                        b.status = 0; this.score++;
                        if (this.score === 15) {
                            alert("¡GANASTE,FELICIDADES!");
                            window.location.reload();
                        }
                    }
                }
            }
        }
    }

    //Métodoprincipalparadibujaryactualizarel juego 
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBricks();
        this.ball.draw();
        this.paddle.draw();
        this.drawScore();
        this.drawLives();
        this.collisionDetection();
        if (this.ball.x + this.ball.dx > this.canvas.width - this.ball.radius || this.ball.x + this.ball.dx < this.ball.radius) {
            this.ball.dx = -this.ball.dx;
        }
        if (this.ball.y + this.ball.dy < this.ball.radius) {
            this.ball.dy = -this.ball.dy;
        } else if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.radius) {
            if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {
                this.ball.dy = -this.ball.dy;
            } else {
                this.lives--;
                if (!this.lives) {
                    alert("¡JUEGOTERMINADO!");
                    window.location.reload();
                } else {
                    this.ball.x = this.canvas.width / 2;
                    this.ball.y = this.canvas.height - 30;
                    this.ball.dx = 2; this.ball.dy = -2;
                    this.paddle.x = (this.canvas.width - this.paddle.width) / 2;
                }
            }
        }
        if (this.rightPressed && this.paddle.x < this.canvas.width - this.paddle.width) {
            this.paddle.x += 7;
        } else if (this.leftPressed && this.paddle.x > 0) {
            this.paddle.x -= 7;
        }
        this.ball.x += this.ball.dx;
        this.ball.y += this.ball.dy;
    }

    //Métodoparadibujarlosladrillosenel lienzo 
    drawBricks() {
        for (let c = 0; c < 5; c++) {
            for (let r = 0; r < 3; r++) {
                if (this.bricks[c][r].status === 1) {
                    this.bricks[c][r].draw();
                }
            }
        }
    }

    //Métodoparadibujarlapuntuaciónenel lienzo 
    drawScore() {
        this.ctx.font = "16pxArial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Puntuación:" + this.score, 8, 20);
    }
    //Métodoparadibujarlasvidasrestantesenel lienzo 
    drawLives() {
        this.ctx.font = "16pxArial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Vidas:" + this.lives, this.canvas.width - 65, 20);
    }
}
//Crearinstanciadel juego 
let game = new Game("myCanvas");