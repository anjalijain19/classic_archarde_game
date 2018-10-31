// Enemies our player must avoid
let min=1;
let max=2;
let won=false;

let Enemy = function(x,y,speed) {
    // letiables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x=x;
    this.y=y;
    this.speed=speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.width=101;
    this.height=171;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if(this.x < ctx.canvas.width) {
        this.x += this.speed * dt;
    }
    else {
        let random = Math.random() * (+max - +min) + +min;
        this.x -= this.x * random;
        if(this.x>-101)
        {
            random = Math.random() * (+max - +min) + +min;
            this.x -= this.x;
        }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// Enemies our player must avoid
let Player = function(x,y,sprite) {
    this.x=x;
    this.y=y;
    this.width=101;
    this.height=171;
    if(sprite==undefined)
        this.sprite = 'images/char-boy.png';
    else
        this.sprite=sprite;
};

// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function(dt) {
    //player logic here
    for (let enemy of allEnemies) {
        /*if (this.x < enemy.x + enemy.width  && this.x + this.width  > enemy.x &&
         this.y < enemy.y + enemy.height && this.y + this.height > enemy.y)*/
        if(this.x < enemy.x + 70 && this.x + 70 > enemy.x && this.y < enemy.y + 25 && this.y+30 > enemy.y){
            // The objects are touching
            this.reset();
        }
    }
};

Player.prototype.handleInput = function(arrowKey) {
    switch (arrowKey){
        case 'left':
            if(this.x>0)
                this.x-=101;
            break;
        case 'right':
            if((this.x+101)<ctx.canvas.width)
                this.x+=101;
            break;
        case 'up':
            if(this.y>0)
                this.y-=85;
            break;
        case 'down':
            if(this.y<400)
                this.y+=85;
    }
};

// reset player position to start
Player.prototype.reset = function() {
    this.x=202;
    this.y=400
    won=false;
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies=[];
const enemy1 = new Enemy(-101, 63, 80);
const enemy2 = new Enemy(-707, 130, 100);
const enemy3 = new Enemy(-303, 145, 160);
const enemy4 = new Enemy(-505 , 225, 90);
allEnemies.push(enemy1, enemy2, enemy3, enemy4);
// Place the player object in a variable called player
let player=new Player(202,400,'images/char-boy.png');


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});