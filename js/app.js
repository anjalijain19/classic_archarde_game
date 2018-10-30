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
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
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
};

Player.prototype.handleInput = function() {
    //handle input
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