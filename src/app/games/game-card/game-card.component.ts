import { Component, inject, Input } from '@angular/core';
import { GameI } from '../games-interface';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-game-card',
  standalone: false,
  templateUrl: './game-card.component.html',
  styleUrl: '../games.component.scss',
})
export class GameCardComponent {
  @Input() incomingGame: GameI;

  cartService = inject(CartService);

  addToCart(game: GameI) {
    this.cartService.updateGaneToCart(game);
  }
}
