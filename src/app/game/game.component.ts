
import { Component } from '@angular/core';


// import GameState from './states/game.state';

@Component({
    selector: 'indi-game',
    template: `<ng-content></ng-content>`
})
export class GameComponent {

    constructor() {
        console.log('GameComponent constructor');

        let width = document.documentElement.clientWidth > 768 ? 768 : document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight > 1024 ? 1024 : document.documentElement.clientHeight;

        // super(width, height, Phaser.CANVAS, 'content', null);

        // this.state.add('Game', GameState, false);
        // this.state.start('Game');
    }
}