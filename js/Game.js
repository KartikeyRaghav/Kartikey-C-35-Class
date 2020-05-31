class Game {

    constructor() {

    }

    gameState() {
        var gameStateref = database1.ref("GameState");
        gameStateref.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state) {
        database1.ref('/').update({gameState:state});
    }

    start() {
        if(gameState === 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    
}