
import { Component } from '@angular/core';

import 'pixi';
import 'p2';
import * as Phaser from 'phaser';

// import GameState from './states/game.state';

@Component({
    selector: 'indi-game',
})
export class GameComponent extends Phaser.Game {

    constructor() {
        let width = document.documentElement.clientWidth > 768 ? 768 : document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight > 1024 ? 1024 : document.documentElement.clientHeight;

        super(width, height, Phaser.CANVAS, 'content', null);

        // this.state.add('Game', GameState, false);
        // this.state.start('Game');
    }
}