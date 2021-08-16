var game;
var cursors;

Bootstrap = new Bootstrap();

var gameOptions = {
    levelWidth: 3200,
    levelHeight: 700,
    viewPortWidth: 1280,
    viewPortHeight: 600,
};

window.onload = function() {    
    var config = {        
        type: Phaser.AUTO,        
        scale: {
            mode: Phaser.Scale.NONE,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: gameOptions.viewPortWidth,
            height: gameOptions.viewPortHeight
        },
        physics: {            
            default: 'arcade',
            arcade: {
                gravity: {y: 300}, 
                debug: false,
            }
        },
        scene: [Bootstrap, new MainMenu(), new GameHud(), new DefaultScene(), new PauseMenu(), new GameOver(), new Victory()],        
        backgroundColor: 0x000000
    };

    game = new Phaser.Game(config);
    window.focus();  
};
  
function resizeGame() {
    var canvas = document.getElementsByTagName('canvas')[0];
    var windowWidth = window.innerWidth;  
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;
    
    if(windowRatio < 1) {
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else
    {
        canvas.style.height = windowHeight + "px";
        canvas.style.width = (windowHeight * gameRatio) + "px";
    }
}