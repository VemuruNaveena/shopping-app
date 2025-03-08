import { Component, Input } from '@angular/core';
import { GameI } from '../games-interface';

@Component({
  selector: 'app-game-card',
  standalone: false,
  templateUrl: './game-card.component.html',
  styleUrl: '../games.component.scss',
})
export class GameCardComponent {
  @Input() incomingGame: GameI;
}
