class Victory extends Phaser.Scene {
    bg;
    resumeButton;
    
    constructor() {
        super('Victory');
    }    

    create() {     
        this.showTitle();
    }

    showTitle() {
        this.bg = this.add.image(640, 0, 'victory');
        
        this.tweens.add({           
            targets: [this.bg],
            y: 300, 
            duration: 1000,
            callbackScope: this,
            onComplete: function() {                
                this.showButtons();
            }
        });
    }

    showButtons() {
        this.resumeButton = this.add.sprite(930, 100, 'resume_button');
        this.resumeButton.alpha = 0;

        this.tweens.add({            
            targets: [this.resumeButton],
            alpha: 1,  
            duration: 1000,
        });

        this.resumeButton.setInteractive();

        this.resumeButton.on('pointerdown', () => {            
            this.scene.start("MainMenu");
        });        
    }
}