class MainMenu extends Phaser.Scene {
    title;
    startButton;
    
    constructor() {
        super('MainMenu');
    }    

    create() {       
        this.showTitle();
    }

    showTitle() {
        this.title = this.add.image(640, 300, 'title');
        this.title.alpha = 0;

        this.tweens.add({
            targets: [this.title],
            alpha: 1, 
            duration: 1000,
            callbackScope: this,
            onComplete: function() {                
                this.showButtons();
            }
        });
    }

    showButtons() {
        this.startButton = this.add.sprite(1000, 100, 'start_button');
        this.startButton.alpha = 0;

        this.tweens.add({            
            targets: [this.startButton],
            alpha: 1,  
            duration: 1000,
        });

        this.startButton.setInteractive();

        this.startButton.on('pointerdown', () => {            
            this.scene.start("DefaultScene");
        });        
    }
}