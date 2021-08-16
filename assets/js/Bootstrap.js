class Bootstrap extends Phaser.Scene {

    constructor() {
        super('Bootstrap');
    }

    preload() {        
        this.load.image('bg', 'assets/images/965547f58e9c93b038f83ec5a16bb992.png');       
        this.load.image('ground', 'assets/images/Pad_01_1.png'); 
        this.load.image('ground2', 'assets/images/Pad_02_1.png');
        this.load.image('ground3', 'assets/images/Pad_03_1.png');
        this.load.image('dragonfruit', 'assets/images/DragonFruit.png');
        this.load.image('banana', 'assets/images/Prop_2.png');
        this.load.image('pie', 'assets/images/PiePumpkin.png');
        this.load.image('fire', 'assets/images/fireGlobe.png');
        this.load.image('ice', 'assets/images/Prop_5.png');
        this.load.image('ice2', 'assets/images/Prop_6.png');
        this.load.image('star', 'assets/images/star.png');
        this.load.image('particle', 'assets/images/star_particle.png');
        this.load.image('title', 'assets/images/MenuIniziale.jpg');
        this.load.image('start_button', 'assets/images/start_button.png');
        this.load.image('pause_panel', 'assets/images/Menu.png');
        this.load.image('resume_button', 'assets/images/resume.png');
        this.load.image('play_again_button', 'assets/images/play_again.png');
        this.load.image('gameover', 'assets/images/Gameover.png');
        this.load.image('victory', 'assets/images/Victory.jpg');
        
        this.load.spritesheet('dinoRed', 'assets/images/DinoSprites_mort.png', {
            frameWidth: 24,
            frameHeight: 24
        });  

        this.load.spritesheet('dinoYellow', 'assets/images/DinoSprites_tard.png', {
            frameWidth: 24,
            frameHeight: 24
        });

        this.load.spritesheet('slime', 'assets/images/Slime_Medium_Blue.png', {
            frameWidth: 32,
            frameHeight: 32
        });

        this.load.spritesheet('wraith', 'assets/images/wraith03.png', {
            frameWidth: 520,
            frameHeight: 420
        });

        this.load.spritesheet('boss', 'assets/images/wraith01.png', {
            frameWidth: 520,
            frameHeight: 420
        });
        
        this.load.bitmapFont('bitfont', 'assets/fonts/bitfont_0.png', 'assets/fonts/bitfont.fnt');      
    }

    create() {
        this.scene.start('MainMenu');   
    }
}