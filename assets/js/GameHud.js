class GameHud extends Phaser.Scene {
    Text;
    dragonfruit1;
    dragonfruit2;
    dragonfruit3;
    pie;
    pieText;
    banana1;
    banana2;
    banana3;

    alpha1 = 1;
    alpha2 = 1;
    alpha3 = 0;

    bananaAlpha1 = 0;
    bananaAlpha2 = 0;
    bananaAlpha3 = 0;
    
    dinoRedTxt;
    dinoYellowTxt;

    t;
    
    constructor() {
        super("HUD");
    }

    create() {
        this.Text = this.add.bitmapText(16, 16, 'bitfont', 'Lifes: 3');
        this.Text.setScrollFactor(0);    
        
        this.dragonfruit1 = this.add.sprite(20, 60, 'dragonfruit');
        this.dragonfruit2 = this.add.sprite(40, 60, 'dragonfruit');
        this.dragonfruit3 = this.add.sprite(60, 60, 'dragonfruit');        
        
        this.banana1 = this.add.sprite(20, 60, 'banana').setScale(0.05);
        this.banana2 = this.add.sprite(40, 60, 'banana').setScale(0.05);
        this.banana3 = this.add.sprite(60, 60, 'banana').setScale(0.05);

        this.pie = this.add.sprite(1150, 30, 'pie').setScale(2.2);
        this.pieText = this.add.bitmapText(1180, 16, 'bitfont', 'X 0').setTintFill(0xff6600);
        this.pieText.setScrollFactor(0);   

        this.add.sprite(200, 32, 'dinoRed', 6).setScale(1.8);
        this.dinoRedTxt = this.add.bitmapText(190, 16, 'bitfont', '').setTintFill(0xff0000);

        this.add.sprite(240, 32, 'dinoYellow', 6).setScale(1.8);
        this.dinoYellowTxt = this.add.bitmapText(230, 16, 'bitfont', '').setTintFill(0xffcc00);

        this.t = this.add.bitmapText(400, 16, 'bitfont', '');
    }

    update() {
        this.dragonfruit1.alpha = this.alpha1;
        this.dragonfruit2.alpha = this.alpha2;
        this.dragonfruit3.alpha = this.alpha3;

        this.banana1.alpha = this.bananaAlpha1;
        this.banana2.alpha = this.bananaAlpha2;
        this.banana3.alpha = this.bananaAlpha3;
    }
}