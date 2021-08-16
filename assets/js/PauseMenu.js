class PauseMenu extends Phaser.Scene {
    title;
    menuButton;
    resumeButton;    
    cursors;

    constructor() {
        super("Pause");
    }

    create() {
        this.add.image(640, 300, 'pause_panel').setScale(0.8);
        
        this.resumeButton = this.add.image(640, 220, 'resume_button');
        this.resumeButton.setInteractive();
        this.resumeButton.on('pointerdown', () => {
            this.scene.resume('DefaultScene');
            this.scene.stop('Pause');
        });

        this.menuButton = this.add.image(640, 400, 'play_again_button');
        this.menuButton.setInteractive();
        this.menuButton.on('pointerdown', () => {
            this.scene.stop('DefaultScene');
            this.scene.stop('Pause');
            this.scene.stop('HUD');
            this.scene.start('MainMenu');
        });       

        this.cursors = {
            esc: this.input.keyboard.addKey('ESC')
        };
    }

    update() {
        if(this.cursors.esc.isDown) {
            this.scene.stop('Pause');
            this.scene.resume('DefaultScene');
        }
    }
}