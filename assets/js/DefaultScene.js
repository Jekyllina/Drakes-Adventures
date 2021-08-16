class DefaultScene extends Phaser.Scene {    
    platforms; 
    
    activePlayer; 
    activePlayerName = 'Red';   
    playerCollisions;
    playerCollisions2;
    damagedAnim;  
    damagedAnimTimer = 0;
    damaged = false;
    damagedTimer = 0; 
    aliveTimer; 
    
    redPlayer;   
    redActive = true; 
    redLifes = 2;
    dragonfruits;
    numDragonfruits = 2;
    redPower = false;
    redFruitCollision;

    yellowPlayer;
    yellowActive = false;
    yellowLifes = 2;
    bananas;
    numBananas = 2;
    yellowPower = false;
    yellowFruitCollision;
    
    spritePlayer;
    changeTimer = 0;
    isCPressed = false;

    bg;
    bg2;
    bg3;
    ground;   
    
    pies;
    numPies = 0;

    emitter;

    fireglobes;
    fireGlobe;
    isSpacePressed = false;
    myTimer = 0;
    stars;
    star;
    
    slimes;
    slime;
    slime2;
    slimeTimer = 0;
    slimeLeft;
    slimeRight;
    slimeLeft2;
    slimeRight2;

    wraiths;
    wraith;
    wraithLives = 2;
    wraith2;
    wraith2Lives = 2;
    ices;
    ice;
    iceCollision;
    isAttacking = true;
    iceTimer = 0;
    isAttacking2 = true;
    iceTimer2 = 0;

    boss;
    bossAttackTimer = 0;
    bossAttack = false;
    bossIce;  
    bigIce;
    bossRandomAttack = 0;  
    bossLives = 16;
    bossAlive = true;
    playerNear = false;

    objTimer = 0;
    spawnObj = false;
    dragonfruitSpawn;
    bananaSpawn;
    pieSpawn;
    
    customWorldBounds;    
    
    constructor() {
        super("DefaultScene");  

        this.customWorldBounds = new Phaser.Geom.Rectangle(0, 0, gameOptions.levelWidth, gameOptions.levelHeight);        
    }
    
    create() {                
        this.bg = this.add.image(0, 0, 'bg').setScale(3, 2.7).setOrigin(0, 0);
        this.bg2 = this.add.image(1356, 0, 'bg').setScale(3, 2.7).setOrigin(0, 0);
        this.bg3 = this.add.image(2712, 0, 'bg').setScale(3, 2.7).setOrigin(0, 0);        

        //platforms
        this.platforms = this.physics.add.staticGroup();     
        this.platforms.create(100, 480, 'ground').setScale(0.2).refreshBody();  
        this.platforms.create(380, 600, 'ground').setScale(0.2).refreshBody();
        this.platforms.create(300, 360, 'ground').setScale(0.2).refreshBody();
        this.platforms.create(150, 220, 'ground').setScale(0.2).refreshBody();
        this.platforms.create(760, 500, 'ground2').setScale(0.2).setSize(110, 50).refreshBody();
        this.platforms.create(1100, 400, 'ground3').setScale(0.2).refreshBody();
        this.platforms.create(1270, 500, 'ground2').setScale(0.2).setSize(110, 50).refreshBody();
        this.platforms.create(1500, 360, 'ground').setScale(0.2).refreshBody();
        this.platforms.create(1380, 230, 'ground2').setScale(0.2).setSize(110, 50).refreshBody();
        this.platforms.create(1690, 180, 'ground').setScale(0.2).refreshBody();
        this.platforms.create(1790, 340, 'ground3').setScale(0.2).refreshBody();
        this.platforms.create(2100, 580, 'ground').setScale(0.2).refreshBody();
        this.platforms.create(2270, 460, 'ground2').setScale(0.2).setSize(110, 50).refreshBody();
        this.platforms.create(2150, 310, 'ground').setScale(0.2).refreshBody();
        this.platforms.create(2500, 370, 'ground').setScale(0.2).refreshBody();
        this.platforms.create(2700, 580, 'ground3').setScale(0.2).refreshBody();
        this.platforms.create(2810, 450, 'ground3').setScale(0.2).refreshBody();
        
        
        //ground
        this.platforms.create(300, gameOptions.levelHeight + 120, 'ground').setScale(2, 1).refreshBody();
        this.platforms.create(1540, gameOptions.levelHeight + 120, 'ground').setScale(2.2, 1).refreshBody(); 
        this.platforms.create(2800, gameOptions.levelHeight + 120, 'ground').setScale(2.3, 1).refreshBody();      


        //player      
        this.spritePlayer = 'dinoRed';     
        this.redPlayer = this.physics.add.sprite(60, 660, this.spritePlayer).setScale(3, 3);  
        this.activePlayer = this.redPlayer;
        this.activePlayer.setSize(20, 15);        
        this.activePlayer.body.customBoundsRectangle = this.customWorldBounds;
        this.activePlayer.setCollideWorldBounds(true);     
        
        this.fireglobes = this.physics.add.group(); 
        this.stars = this.physics.add.group();      
         
        this.anims.create({
            key: 'idleRed',  
            frames: this.anims.generateFrameNumbers(this.spritePlayer, {start: 0, end: 3}),  
            repeat: -1,
            frameRate: 10   
        });
        
        this.anims.create({            
            key: 'walkRed',
            frames: this.anims.generateFrameNumbers(this.spritePlayer, {start: 4, end: 7}),  
            repeat: -1,
            frameRate: 10  
        });
        
        this.anims.create({            
            key: 'dmgRed',
            frames: this.anims.generateFrameNumbers(this.spritePlayer, {start: 14, end: 16}), 
            repeat: 1,
            frameRate: 10  
        });

        
        this.anims.create({
            key: 'idleYellow',  
            frames: this.anims.generateFrameNumbers('dinoYellow', {start: 0, end: 3}),  
            repeat: -1,
            frameRate: 10   
        });    
            
        this.anims.create({            
            key: 'walkYellow',
            frames: this.anims.generateFrameNumbers('dinoYellow', {start: 4, end: 7}),  
            repeat: -1,
            frameRate: 10  
        });
                
        this.anims.create({            
            key: 'dmgYellow',
            frames: this.anims.generateFrameNumbers('dinoYellow', {start: 14, end: 16}), 
            repeat: 1,
            frameRate: 10  
        });


        //fruits
        this.dragonfruits = this.physics.add.group();
        this.dragonfruits.create(150, 180, 'dragonfruit').setScale(1.5); 
        this.dragonfruits.create(1310, 460, 'dragonfruit').setScale(1.5); 
        this.dragonfruitSpawn = this.dragonfruits.create(3300, 600, 'dragonfruit').setScale(1.5);  
        
        this.bananas = this.physics.add.group();
        this.bananas.create(1150, 360, 'banana').setScale(0.065).setSize(10, 11).setRotation(45);
        this.bananas.create(1710, 140, 'banana').setScale(0.065).setSize(10, 11).setRotation(45);
        this.bananaSpawn = this.bananas.create(3300, 600, 'banana').setScale(0.065).setSize(10, 11).setRotation(45);


        //pies        
        this.pies = this.physics.add.group();
        this.pies.create(60, 440, 'pie').setScale(1.5).setSize(10, 11);
        this.pies.create(100, 440, 'pie').setScale(1.5).setSize(10, 11);
        this.pies.create(140, 440, 'pie').setScale(1.5).setSize(10, 11);
        this.pies.create(300, 320, 'pie').setScale(1.5).setSize(10, 11);
        this.pies.create(720, 460, 'pie').setScale(1.5).setSize(10, 11);
        this.pies.create(750, 460, 'pie').setScale(1.5).setSize(10, 11);
        this.pies.create(1200, 660, 'pie').setScale(1.5).setSize(10, 11);
        this.pies.create(1250, 660, 'pie').setScale(1.5).setSize(10, 11);
        this.pies.create(1280, 660, 'pie').setScale(1.5).setSize(10, 11);
        this.pies.create(1260, 460, 'pie').setScale(1.5).setSize(10, 11);
        this.pies.create(1480, 320, 'pie').setScale(1.5).setSize(10, 11);
        this.pies.create(1500, 320, 'pie').setScale(1.5).setSize(10, 11);
        this.pies.create(1530, 320, 'pie').setScale(1.5).setSize(10, 11);
        this.pies.create(1750, 660, 'pie').setScale(1.5).setSize(10, 11);
        this.pies.create(1800, 660, 'pie').setScale(1.5).setSize(10, 11);
        this.pieSpawn = this.pies.create(3300, 660, 'pie').setScale(1.5).setSize(10, 11);
      
        
        //enemies   
        this.slimes = this.physics.add.group();     
        this.slime = this.slimes.create(700, 660, 'slime').setScale(2).setSize(15, 10);
        this.slime2 = this.slimes.create(1300, 660, 'slime').setScale(2).setSize(15, 10);      

        this.anims.create({
            key: 'slimeIdle',  
            frames: this.anims.generateFrameNumbers('slime', {start: 0, end: 3}),  
            repeat: -1,
            frameRate: 4   
        });

        this.anims.create({
            key: 'slimeRight',  
            frames: this.anims.generateFrameNumbers('slime', {start: 4, end: 7}),  
            repeat: -1,
            frameRate: 4   
        });

        this.anims.create({
            key: 'slimeLeft',  
            frames: this.anims.generateFrameNumbers('slime', {start: 12, end: 15}),  
            repeat: -1,
            frameRate: 4   
        });

        this.wraiths = this.physics.add.group();     
        this.wraith = this.wraiths.create(1070, 360, 'wraith').setScale(0.2).setSize(30, 120);
        this.wraith.body.velocity.x = 60; 
        this.wraith2 = this.wraiths.create(1770, 260, 'wraith').setScale(0.2).setSize(30, 120);
        this.wraith2.body.velocity.x = 60;     
        
        this.anims.create({
            key: 'wraithWalk',  
            frames: this.anims.generateFrameNumbers('wraith', {start: 60, end: 71}),  
            repeat: -1,
            frameRate: 8   
        });

        this.anims.create({
            key: 'wraithMagic',  
            frames: this.anims.generateFrameNumbers('wraith', {start: 45, end: 56}),  
            repeat: 0,
            frameRate: 8   
        });

        this.anims.create({
            key: 'wraithDmg',  
            frames: this.anims.generateFrameNumbers('wraith', {start: 15, end: 26}),  
            repeat: 0,
            frameRate: 8   
        });

        this.wraith.anims.play('wraithWalk');
        this.wraith2.anims.play('wraithWalk');

        this.boss = this.wraiths.create(3120, 660, 'boss').setScale(0.4).setSize(42, 200);        
        this.boss.setFlipX(true);
        this.boss.body.setAllowGravity(false);

        this.anims.create({
            key: 'bossIdle',  
            frames: this.anims.generateFrameNumbers('boss', {start: 30, end: 37}),  
            repeat: -1,
            frameRate: 8   
        });

        this.anims.create({
            key: 'bossMagic',  
            frames: this.anims.generateFrameNumbers('boss', {start: 45, end: 57}),  
            repeat: 0,
            frameRate: 8   
        });

        this.anims.create({
            key: 'bossDmg',  
            frames: this.anims.generateFrameNumbers('boss', {start: 15, end: 26}),  
            repeat: 0,
            frameRate: 8   
        });

        this.anims.create({
            key: 'bossDie',  
            frames: this.anims.generateFrameNumbers('boss', {start: 0, end: 14}),  
            repeat: 0,
            frameRate: 8   
        });

        this.ices = this.physics.add.group();
        this.ice = this.ices.create(-30, this.wraith.y, 'ice').setScale(0.1);
        this.bossIce = this.ices.create(3300, this.boss.y, 'ice').setScale(0.15);
        this.bigIce = this.ices.create(3300, this.boss.y, 'ice2').setScale(0.15);       

        //collisions
        this.physics.add.collider(this.activePlayer, this.platforms);       
        this.physics.add.collider(this.pies, this.platforms);  
        this.physics.add.collider(this.dragonfruits, this.platforms);
        this.physics.add.collider(this.bananas, this.platforms);
        this.physics.add.overlap(this.activePlayer, this.pies, this.collectPies, null, this);
        this.physics.add.collider(this.slimes, this.platforms);
        this.physics.add.collider(this.wraiths, this.platforms);        
        this.iceCollision = this.physics.add.collider(this.activePlayer, this.ices, this.damagePlayerwithIce, null, this);
        this.playerCollisions = this.physics.add.collider(this.activePlayer, this.slimes, this.collisionWithEnemies, null, this); 
        this.playerCollisions2 = this.physics.add.collider(this.activePlayer, this.wraiths, this.collisionWithEnemies, null, this);
        
        this.redFruitCollision = this.physics.add.overlap(this.activePlayer, this.dragonfruits, this.collectDragonfruit, null, this);
        this.physics.add.collider(this.fireglobes, this.slimes, this.damageSlimeWithFire, null, this);   
        this.physics.add.collider(this.fireglobes, this.wraiths, this.damageSlimeWithFire, null, this);          

        this.yellowFruitCollision = this.physics.add.overlap(this.activePlayer, this.bananas, this.collectBanana, null, this);
        this.yellowFruitCollision.active = false;
        this.physics.add.collider(this.stars, this.slimes, this.damageSlimeWithStar, null, this); 
        this.physics.add.collider(this.stars, this.wraiths, this.damageWraithWithStar, null, this);
        
        //controls
        cursors = this.input.keyboard.createCursorKeys();
        cursors.c = this.input.keyboard.addKey('C');
        cursors.esc = this.input.keyboard.addKey('ESC');
        

        //camera 
        this.cameras.main.startFollow(this.activePlayer);
        this.cameras.main.setBounds(0, 0, gameOptions.levelWidth, gameOptions.levelHeight);
        this.cameras.main.setDeadzone(200, 300);

        
        this.scene.run("HUD");        
        this.scene.bringToTop('HUD');         

        
        //emitter 
        this.emitter = this.add.particles('particle').createEmitter({
            scale: {
                start: 1,
                end: 0,
                ease: 'Cubic.easeInOut'
            },
            speed: {
                min: 0,
                max: 200
            },
            rotate: {random: [0, 360]},
            active: true,  
            lifespan: 500,
            quantity: 5,
            frequency: -1  
        });
    }

    update(){     
        if (this.redActive)
            game.scene.getScene("HUD").Text.setText('Lives: ' + this.redLifes).setTintFill(0xff0000);
        else if(this.yellowActive)
            game.scene.getScene("HUD").Text.setText('Lives: ' + this.yellowLifes).setTintFill(0xffcc00);
        
        if(this.damaged == false)
        {
            this.playerCollisions.active = true; 
            this.playerCollisions2.active = true; 
            this.iceCollision.active = true;                 
        }

        if(this.damaged)
        {
            this.damagedTimer++;
            this.playerCollisions.active = false;
            this.playerCollisions2.active = false;
            this.iceCollision.active = false;               
        }

        if(this.damagedTimer >= 10)
        {
            this.damagedTimer = 0;
            this.damaged = false;
        }
        
        if(cursors.left.isDown)
        {
            this.activePlayer.setVelocityX(-160);
            this.activePlayer.setFlipX(true);
            this.activePlayer.anims.play('walk'+this.activePlayerName, true);
        }
        else if(cursors.right.isDown)
        {            
            this.activePlayer.setVelocityX(160);
            this.activePlayer.setFlipX(false);
            this.activePlayer.anims.play('walk'+this.activePlayerName, true);
        }           
        else 
        {
            this.activePlayer.setVelocityX(0);
            this.activePlayer.anims.play('idle'+this.activePlayerName, true);
        }
        
        if(cursors.up.isDown && this.activePlayer.body.touching.down)
        {            
            this.activePlayer.setVelocityY(-300);          
        }  
        
        if(cursors.c.isDown && this.isCPressed == false)
        {
            if(this.redActive && this.yellowLifes > 0)
            {
                this.activePlayerName = "Yellow";
                this.changePlayer(this.activePlayerName);
            }
            else if(this.yellowActive && this.redLifes > 0)
            {
                this.activePlayerName = "Red";
                this.changePlayer(this.activePlayerName);
            }               
            
            this.isCPressed = true;
        }

        if(this.isCPressed)
        {
            this.changeTimer++;
        }   

        if(this.changeTimer >= 8)
        {
            this.isCPressed = false;
            this.changeTimer = 0;
        }  
        
        if(this.damagedAnim)
        {
            this.activePlayer.anims.play('dmg'+this.activePlayerName, true);
            this.damagedAnimTimer++;
        }

        if(this.damagedAnimTimer >= 4)
        {
            this.damagedAnim = false;
            this.damagedAnimTimer = 0;
        }        

        if(this.redPower && cursors.space.isDown && this.isSpacePressed == false)
        {                      
            this.fireGlobe = this.fireglobes.create(this.activePlayer.x, this.activePlayer.y, 'fire').setScale(0.5);
            
            if (this.activePlayer.flipX)
            {
                this.fireGlobe.setVelocityX(-400);
                this.fireGlobe.setVelocityY(-100);
            }
            else
            {
                this.fireGlobe.setVelocityX(400);
                this.fireGlobe.setVelocityY(-100);
            }
            
            this.isSpacePressed = true;            
        } 
        
        if(this.yellowPower && cursors.space.isDown && this.isSpacePressed == false)
        {                       
            this.star = this.stars.create(this.activePlayer.x, this.activePlayer.y, 'star');
            
            if (this.activePlayer.flipX)
            {
                this.star.setVelocityX(-450);
                this.star.body.setAllowGravity(false);
            }
            else
            {
                this.star.setVelocityX(450);
                this.star.body.setAllowGravity(false);
            }
            
            this.isSpacePressed = true;            
        }

        if(this.isSpacePressed)
        {
            this.myTimer++;
        }   

        if(this.myTimer >= 8)
        {
            this.isSpacePressed = false;
            this.myTimer = 0;
        }        

        this.slimeMovement();        
        this.wraithMovement(this.wraith);
        this.wraithMovement2(this.wraith2);

        if(this.activePlayer.x >= 2400)
            this.playerNear = true;

        if(this.bossAlive && this.playerNear)
        {
            this.bossMovement();

            if(this.bossAttack == false)
                this.bossAttackTimer++;

            if(this.bossAttackTimer >= 180)
            {
                this.bossAttack = true;
                this.bossAttackTimer = 0;
            }
        }        

        this.spawnObject();

        if(this.spawnObj == false)
            this.objTimer++;

        if(this.objTimer >= 250)
        {
            this.spawnObj = true;
            this.objTimer = 0;
        }
        
        if(cursors.esc.isDown)
        {
            this.scene.run('Pause');
            this.scene.pause('DefaultScene');
        }
    }

    changePlayer(name)
    {        
        if(name == "Red")
        {
            this.redActive = true;
            this.yellowActive = false;   
            this.yellowPower = false;
            this.redFruitCollision.active = true;  
            this.yellowFruitCollision.active = false;  
            
            game.scene.getScene("HUD").bananaAlpha1 = 0;   
            game.scene.getScene("HUD").bananaAlpha2 = 0; 
            game.scene.getScene("HUD").bananaAlpha3 = 0;
            
            if(this.numDragonfruits == 3)
            {
                game.scene.getScene("HUD").alpha1 = 1;   
                game.scene.getScene("HUD").alpha2 = 1;   
                game.scene.getScene("HUD").alpha3 = 1;   
                this.redPower = true;
            }
            else if(this.numDragonfruits == 2)
            {
                game.scene.getScene("HUD").alpha1 = 1;   
                game.scene.getScene("HUD").alpha2 = 1; 
                game.scene.getScene("HUD").alpha3 = 0;  
            }
            else if(this.numDragonfruits == 1)
            {
                game.scene.getScene("HUD").alpha1 = 1;   
                game.scene.getScene("HUD").alpha2 = 0; 
                game.scene.getScene("HUD").alpha3 = 0;
            }
        }
        else if(name == "Yellow")
        {
            this.yellowActive = true;
            this.redActive = false;  
            this.redPower = false; 
            this.redFruitCollision.active = false;       
            this.yellowFruitCollision.active = true;  

            game.scene.getScene("HUD").alpha1 = 0;   
            game.scene.getScene("HUD").alpha2 = 0;   
            game.scene.getScene("HUD").alpha3 = 0;

            if(this.numBananas == 3)
            {
                game.scene.getScene("HUD").bananaAlpha1 = 1;   
                game.scene.getScene("HUD").bananaAlpha2 = 1; 
                game.scene.getScene("HUD").bananaAlpha3 = 1;
                this.yellowPower = true;
            }
            else if(this.numBananas == 2)
            {
                game.scene.getScene("HUD").bananaAlpha1 = 1;   
                game.scene.getScene("HUD").bananaAlpha2 = 1; 
                game.scene.getScene("HUD").bananaAlpha3 = 0;
            }
            else if(this.numBananas == 1)
            {
                game.scene.getScene("HUD").bananaAlpha1 = 1;   
                game.scene.getScene("HUD").bananaAlpha2 = 0; 
                game.scene.getScene("HUD").bananaAlpha3 = 0;
            }
        }     
    }

    collectPies(player, pie){        
        pie.disableBody(true, true);          
        
        this.numPies += 1;        
        game.scene.getScene("HUD").pieText.setText('X ' + this.numPies);

        if (this.numPies == 15)
        {
            if (this.redActive)
                this.redLifes += 1;
            else if(this.yellowActive)
                this.yellowLifes +=1;

            this.numPies = 0;
            game.scene.getScene("HUD").pieText.setText('X ' + this.numPies);
        }      
    }    

    collectDragonfruit(player, dragonfruit){        
        if (this.numDragonfruits == 2)
        {            
            dragonfruit.disableBody(true, true);
            this.numDragonfruits += 1;
            game.scene.getScene("HUD").alpha3 = 1;   
            this.redPower = true;         
        }
        else if (this.numDragonfruits == 3)
            return;
        
        else if (this.numDragonfruits == 1)
        {            
            dragonfruit.disableBody(true, true);
            this.numDragonfruits += 1;
            game.scene.getScene("HUD").alpha2 = 1;
        }        
    }

    collectBanana(player, banana){ 
        if (this.numBananas == 2)
        {            
            banana.disableBody(true, true);
            this.numBananas += 1;
            game.scene.getScene("HUD").bananaAlpha3 = 1;   
            this.yellowPower = true;         
        }
        else if (this.numBananas == 3)
            return;
        
        else if (this.numBananas == 1)
        {            
            banana.disableBody(true, true);
            this.numBananas += 1;
            game.scene.getScene("HUD").bananaAlpha2 = 1;
        }        
    }

    collisionWithEnemies(player, enemy)
    {
        if(this.activePlayer.body.touching.left && this.activePlayer.body.touching.down || this.activePlayer.body.touching.right && this.activePlayer.body.touching.down)
            this.damagePlayer();
        else
        {
            if(enemy == this.slime)
                this.damageSlime(player, enemy);
            else if(enemy == this.slime2)
                this.damageSlime(player, enemy);
            else if(enemy == this.wraith)
                this.damageWraith(player, enemy);
            else if(enemy == this.wraith2)
                this.damageWraith(player, enemy);            
        }            
    }

    damagePlayerwithIce(player, ice)
    {                
        ice.disableBody(false, true);         
        this.bossAttack = false;       
        this.damagePlayer();                
    }

    damagePlayer(){
        this.damagedAnim = true;        

        if(this.redActive)
        {
            if(this.numDragonfruits == 1)
            {
                this.redLifes -= 1;

                if(this.redLifes <= 0)
                {
                    game.scene.getScene("HUD").dinoRedTxt.setText('X');
                    game.scene.getScene("HUD").alpha1 = 0; 
                    this.redActive = false;

                    if(this.yellowLifes > 0)
                    {
                        this.activePlayerName = "Yellow";
                        this.changePlayer(this.activePlayerName);
                        this.activePlayer.x -= 300;
                    }
                    else
                    {                                 
                        this.scene.stop('DefaultScene');                        
                        this.scene.stop('HUD');
                        this.scene.start('GameOver');
                    }
                }
                else
                {
                    game.scene.getScene("HUD").alpha2 = 1;  
                    this.activePlayer.x -= 300;
                    this.activePlayer.y = 660; 
                    this.activePlayer.setVelocityX(0);  
                    this.numDragonfruits = 2;             
                }            
            }    
            else if(this.numDragonfruits == 2)
            {
                this.numDragonfruits--;
                game.scene.getScene("HUD").alpha2 = 0;  
                this.damaged = true;
            }
            else if(this.numDragonfruits == 3)
            {
                this.numDragonfruits--;
                game.scene.getScene("HUD").alpha3 = 0;   
                this.redPower = false;      
                this.damaged = true;  
            }
        }
        else if(this.yellowActive)
        {
            if(this.numBananas == 1)
            {
                this.yellowLifes -= 1;

                if(this.yellowLifes <= 0)
                {
                    game.scene.getScene("HUD").dinoYellowTxt.setText('X');
                    game.scene.getScene("HUD").bananaAlpha1 = 0; 
                    this.yellowActive = false;

                    if(this.redLifes > 0)
                    {
                        this.activePlayerName = "Red";
                        this.changePlayer(this.activePlayerName);
                        this.activePlayer.x -= 300;
                    }
                    else                  
                    {                            
                        this.scene.stop('DefaultScene');                        
                        this.scene.stop('HUD');
                        this.scene.start('GameOver');
                    }                    
                }
                else
                {
                    game.scene.getScene("HUD").bananaAlpha2 = 1;  
                    this.activePlayer.x -= 300;
                    this.activePlayer.y = 660; 
                    this.activePlayer.setVelocityX(0);  
                    this.numBananas = 2;             
                }            
            }    
            else if(this.numBananas == 2)
            {
                this.numBananas--;
                game.scene.getScene("HUD").bananaAlpha2 = 0;  
                this.damaged = true;
            }
            else if(this.numBananas == 3)
            {
                this.numBananas--;
                game.scene.getScene("HUD").bananaAlpha3 = 0;   
                this.yellowPower = false;      
                this.damaged = true;  
            }
        }                
    }

    damageSlime(player, enemy){        
        enemy.disableBody(true, true);
    }

    damageWraith(player, enemy){
        if(enemy == this.wraith)
        {
            this.wraithLives--;
         
            if(this.wraithLives >= 1)
            {
                this.activePlayer.setVelocityY(-220);
                this.wraith.anims.play('wraithDmg', true);
            }

            if(this.wraithLives <= 0)
                enemy.disableBody(true, true); 
        }  
        else if(enemy == this.wraith2)
        {
            this.wraith2Lives--;
         
            if(this.wraith2Lives >= 1)
            {
                this.activePlayer.setVelocityY(-220);
                this.wraith2.anims.play('wraithDmg', true);
            }

            if(this.wraith2Lives <= 0)
                enemy.disableBody(true, true); 
        }                     
    }

    damageSlimeWithFire(fireGlobe, enemy){ 
        if(enemy == this.boss)
            this.damageBossWithFire(fireGlobe, enemy);
        else
        {
            enemy.disableBody(true, true);
            fireGlobe.disableBody(true, true);
        }      
    }

    damageSlimeWithStar(star, enemy){ 
        if(enemy == this.boss)
            this.damageBossWithStar(star, enemy);
        else
        {
            enemy.disableBody(true, true);
            star.disableBody(true, true);
            this.emitter.setPosition(enemy.x, enemy.y);
            this.emitter.explode();
        }      
    }

    damageWraithWithStar(star, enemy)
    {
        star.disableBody(true, true);
        this.emitter.setPosition(enemy.x, enemy.y);
        this.emitter.explode();

        if(enemy == this.wraith)
        {
            this.wraithLives--;

            if(this.wraithLives >= 1)
                this.wraith.anims.play('wraithDmg', true);

            if(this.wraithLives <= 0)
                enemy.disableBody(true, true);
        }
        else if(enemy == this.wraith2)
        {
            this.wraith2Lives--;

            if(this.wraith2Lives >= 1)
                this.wraith2.anims.play('wraithDmg', true);

            if(this.wraith2Lives <= 0)
                enemy.disableBody(true, true);
        }
        else if(enemy == this.boss)
            this.damageBossWithStar(star, enemy);
    }

    damageBossWithStar(star, enemy)
    {
        star.disableBody(true, true);
        this.emitter.setPosition(enemy.x, enemy.y);
        this.emitter.explode();

        this.bossLives-= 1;
        
        if(this.bossLives >= 1)
        {
            this.boss.anims.stop();
            this.boss.anims.play('bossDmg', true);
        }
        else
        {
            this.bossAlive = false;            
            this.boss.anims.stop();
            this.boss.setVelocityX(0);
            this.boss.body.setAllowGravity(true);            
            this.boss.anims.play('bossDie', true);             
        
            this.boss.on('animationcomplete-bossDie', () => {                
                this.tweens.add({
                    targets: [this.boss],
                    alpha: 0,  
                    duration: 2000,
                    callbackScope: this,
                    onComplete: function() {                               
                            
                        this.scene.stop('DefaultScene');                        
                        this.scene.stop('HUD');
                        this.scene.start('Victory');
                    }
                });                                   
            }); 
        }
    }

    damageBossWithFire(fireGlobe, enemy)
    {
        fireGlobe.disableBody(true, true);

        this.bossLives-=2;
        
        if(this.bossLives >= 1)
        {
            this.boss.anims.stop();
            this.boss.anims.play('bossDmg', true);
        }
        else
        {
            this.bossAlive = false;            
            this.boss.anims.stop();
            this.boss.setVelocityX(0);
            this.boss.body.setAllowGravity(true);            
            this.boss.anims.play('bossDie', true);
            
            this.boss.on('animationcomplete-bossDie', () => {                
                this.tweens.add({
                    targets: [this.boss],
                    alpha: 0,  
                    duration: 2000,
                    callbackScope: this,
                    onComplete: function() {                        
                        this.scene.stop('DefaultScene');                        
                        this.scene.stop('HUD');
                        this.scene.start('Victory');
                    }
                });                                   
            }); 
        }
    }

    slimeMovement(){
        this.slimeTimer++;

        if(this.slimeTimer >= 130)
        {            
            var move = Phaser.Math.Between(0, 2);
            var move2 = Phaser.Math.Between(0, 2);

            if(move == 0)
            {
                this.slimeLeft = false;
                this.slimeRight = false;
            }
            if(move == 1)
            {
                this.slimeLeft = true;
                this.slimeRight = false;
            }
            if(move == 2)
            {
                this.slimeRight = true;
                this.slimeLeft = false;
            }

            if(move2 == 0)
            {
                this.slimeLeft2 = false;
                this.slimeRight2 = false;
            }
            if(move2 == 1)
            {
                this.slimeLeft2 = true;
                this.slimeRight2 = false;
            }
            if(move2 == 2)
            {
                this.slimeRight2 = true;
                this.slimeLeft2 = false;
            }

            this.slimeTimer = 0;
        }

        if(this.slimeRight)
        {
            this.slime.setVelocityX(30);
            this.slime.anims.play('slimeRight', true);
        }
        else if(this.slimeLeft)
        {
            this.slime.setVelocityX(-30);
            this.slime.anims.play('slimeLeft', true);
        }
        else
        {
            this.slime.setVelocityX(0);
            this.slime.anims.play('slimeIdle', true);
        }

        if(this.slimeRight2)
        {
            this.slime2.setVelocityX(30);
            this.slime2.anims.play('slimeRight', true);
        }
        else if(this.slimeLeft2)
        {
            this.slime2.setVelocityX(-30);
            this.slime2.anims.play('slimeLeft', true);
        }
        else
        {
            this.slime2.setVelocityX(0);
            this.slime2.anims.play('slimeIdle', true);
        }
    }

    wraithMovement(wraith){      
        var dist = wraith.x - this.activePlayer.x;
        
        if(dist < 420)
        {
            if(this.isAttacking)  
                this.wraithAttack(wraith); 
            else
            {
                wraith.body.velocity.x = 0;             
            }               
        }
        else
        { 
            if(wraith.body.velocity.x == 0)
                wraith.body.velocity.x = 60;   

            if(wraith.x <= 1050)
            {
                wraith.body.velocity.x = 60;
                wraith.setFlipX(false);
                wraith.anims.play('wraithWalk', true);
            }
            if(wraith.x >= 1160)
            {
                wraith.body.velocity.x = -60;
                wraith.setFlipX(true);
                wraith.anims.play('wraithWalk', true);
            }  
        } 
        
        if(this.isAttacking == false)
        {
            this.iceTimer++;
            
            if(this.iceTimer >= 100)
            {
                this.iceTimer = 0;
                this.isAttacking = true;
            }
        }
    }

    wraithMovement2(wraith2){      
        var dist = wraith2.x - this.activePlayer.x;
        
        if(dist < 420)
        {
            if(this.isAttacking2)  
                this.wraithAttack2(wraith2); 
            else
            {
                wraith2.body.velocity.x = 0;             
            }               
        }
        else
        { 
            if(wraith2.body.velocity.x == 0)
                wraith2.body.velocity.x = 60;   

            if(wraith2.x <= 1740)
            {
                wraith2.body.velocity.x = 60;
                wraith2.setFlipX(false);
                wraith2.anims.play('wraithWalk', true);
            }
            if(wraith2.x >= 1840)
            {
                wraith2.body.velocity.x = -60;
                wraith2.setFlipX(true);
                wraith2.anims.play('wraithWalk', true);
            }  
        } 
        
        if(this.isAttacking2 == false)
        {
            this.iceTimer2++;
            
            if(this.iceTimer2 >= 100)
            {
                this.iceTimer2 = 0;
                this.isAttacking2 = true;
            }
        }
    }

    wraithAttack(wraith)
    {
        this.isAttacking = false;        

        wraith.setFlipX(true);
        wraith.anims.play('wraithMagic', true); 
        
        wraith.on('animationcomplete-wraithMagic', () => {
            this.ice.enableBody(true, wraith.x, wraith.y, true, true);   
             
            if(wraith.flipX)
            {
                this.ice.setVelocityX(-400);
                this.ice.setVelocityY(-100);
            }
            else
            {
                this.ice.setVelocityX(400);
                this.ice.setVelocityY(-100);
            }         
        });        
    }

    wraithAttack2(wraith2)
    {
        this.isAttacking2 = false;        

        wraith2.setFlipX(true);
        wraith2.anims.play('wraithMagic', true); 
        
        wraith2.on('animationcomplete-wraithMagic', () => {
            this.ice.enableBody(true, wraith2.x, wraith2.y, true, true);
            
            if(wraith2.flipX)
            {
                this.ice.setVelocityX(-400);
                this.ice.setVelocityY(-100);
            }
            else
            {
                this.ice.setVelocityX(400);
                this.ice.setVelocityY(-100);
            }         
        });        
    }

    bossMovement(){ 
        if(this.boss.x <= 2990)
            this.boss.setVelocityX(100);
        if(this.boss.x >= 3170)
            this.boss.setVelocityX(-100);

        if(this.boss.y >= 650)
            this.boss.setVelocityY(-100);
        if(this.boss.y <= 220)
            this.boss.setVelocityY(100);


        if(this.bossAttack == false)
        {
            this.boss.anims.play('bossIdle', true);
        }
        else
        {            
            this.boss.anims.play('bossMagic', true);
            
            this.bossRandomAttack = Phaser.Math.Between(0, 1);
        
            this.boss.on('animationcomplete-bossMagic', () => {  
                if(this.bossRandomAttack == 0)
                {
                    this.bossIce.enableBody(true, this.boss.x, this.boss.y, true, true);                              
                    this.bossIce.setVelocityX(-400);
                    this.bossIce.setVelocityY(-100);
                }
                else
                {
                    var randomX = Phaser.Math.Between(2200, 2850);
                    this.bigIce.enableBody(true, randomX, 50, true, true);                           
                    this.bigIce.setVelocityY(150);
                }             
            });
        }      
    }

    spawnObject()
    {
        if(this.spawnObj)
        {
            var rand = Phaser.Math.Between(0, 3);

            if(rand == 0)
            {
                var randomX = Phaser.Math.Between(2200, 2850);
                this.dragonfruitSpawn.enableBody(true, randomX, 100, true, true);    
            }
            else if(rand == 1)
            {
                var randomX = Phaser.Math.Between(2200, 2850);
                this.bananaSpawn.enableBody(true, randomX, 100, true, true);    
            }
            else if(rand == 2 || rand == 3)
            {
                var randomX = Phaser.Math.Between(2200, 2850);
                this.pieSpawn.enableBody(true, randomX, 100, true, true);    
            }

            this.spawnObj = false;
        }
    } 
}