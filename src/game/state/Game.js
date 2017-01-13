import Phaser from 'phaser';

export default class extends Phaser.State {
    constructor() {
        super();

        // Score
        this.score = 0;

        // Timers
        this.rockTimer;

        // Objects
        this.platforms;
        this.indy;
        this.rocks;
        this.rock;

        // Keys
        this.spaceKey;

        // Images
        this.background;
    }

    init() {}

    preload() {
        //
        // load your assets
        //
        this.load.image('background', './assets/images/background.jpg');
        this.load.image('ground', './assets/images/ground.png');
        this.load.image('rock', './assets/images/rock.png');
        this.load.spritesheet('indy', './assets/images/indy-walking.png', 138, 138, 15);
    }

    create() {
        // Set game type to arcade
        this.physics.startSystem(Phaser.Physics.ARCADE);
        // this.background = this.add.tileSprite(0, 0, 800, 480, 'background'); // Add background
        this.stage.backgroundColor = '#fff';

        // Print score
        this.scoreText = this.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#000'});

        // Platforms
        this.platforms = this.add.group();
        this.platforms.enableBody = true;

        var ground = this.platforms.create(0, this.world.height -60, 'ground');
        ground.scale.setTo(2.6, 1);
        ground.body.immovable = true;

        // Indy controlled by the player
        this.indy = this.add.sprite(120, this.world.height - 250, 'indy');
        this.indy.animations.add('walk');
        this.indy.animations.play('walk', 12, true);
        this.indy.scale.setTo(0.7, 0.7);

        // Enable arcade physics for the player object
        this.physics.arcade.enable(this.indy);
        this.indy.body.gravity.y = 1000;
        this.indy.body.collideWorldBounds = true;

        // Rocks
        this.rocks = this.add.group();
        this.rocks.enableBody = true;
        this.rockTimer = this.time.events.loop(2000, this.addRock, this); // Create a timer that calls addRock every X milliseconds

        // Add keylistners
        this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }

    update() {
        // this.background.tilePosition.x -= 2;
        var hitPlatform = this.physics.arcade.collide(this.indy, this.platforms);

        // Handle keypresses
        if (this.spaceKey.isDown && this.indy.body.touching.down && hitPlatform) {
            this.indy.body.velocity.y = -500;
        }


        this.physics.arcade.overlap(this.indy, this.rocks, this.hitRock, null, this); // Handle player vs. rock collision

        // Calculate the score as long as the player is alive
        if (this.indy.alive) {
            this.calcScore();
        }
    }

    addRock() {
        let xPos = this.world.width;
        let yPos = this.world.height - 120;

        this.rock = this.rocks.create(xPos, yPos, 'rock');
        this.rock.enableBody = true;
        this.rock.scale.setTo(0.5, 0.5);

        // Enable arcade physics for the cookie object
        this.physics.arcade.enable(this.rock);
        this.rock.body.velocity.x = -this.getRandomInt(200, 600);

        this.rocks.add(this.rock);
    }

    getRandomInt(min, max) {
        return (Math.random() * (max - min + 1) << 0) + min;
    }

    calcScore() {
        this.score += 1;
        this.scoreText.text = 'Score: ' + this.score;
        this.scoreText.addColor('#545454', 0);
    }

    hitRock(indy, rock) {
        indy.kill();

        this.scoreText.text = 'Final score: ' + this.score;
    }
}
