var ball;
var gameState = 0;
var PlayerCount;
var count;
var form, player, game;
var database1,positions;
// var PLayer

function setup(){
    // createCanvas(500,500);
    noCanvas();
    
    // Creating the database
    database1 = firebase.database();

    game = new Game();
    game.gameState();
    game.start();
}

function draw(){
    background("white");
    
}