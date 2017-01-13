import 'pixi';
import 'p2';
import Phaser from 'phaser';

// import './scss/main.scss';

import GameState from './states/Game';

class Game extends Phaser.Game {

    constructor() {
        let width = document.documentElement.clientWidth > 768 ? 768 : document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight > 1024 ? 1024 : document.documentElement.clientHeight;

        super(width, height, Phaser.CANVAS, 'content', null);

        this.state.add('Game', GameState, false);
        this.state.start('Game');
    }

    static clickMethiod(event) {
        alert('test');
    }
}

window.game = new Game();


export function cinfigure(aurelia) {
    
    aurelia.use
            .standardConfiguration()
            .developmentLogging();
    
    aurelia.start().then(a => a.setRoot());
}
