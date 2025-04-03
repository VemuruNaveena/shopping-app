import { Component, inject } from '@angular/core';
import { GamesService } from '../games.service';
import { GameI } from './games-interface';

@Component({
  selector: 'app-games',
  standalone: false,
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss',
})
export class GamesComponent {
  gamesService = inject(GamesService);

  gamesList: GameI[] = [];

  constructor() {
    this.getGmaes();
  }

  getGmaes() {
    this.gamesService.fetchgamesData().subscribe(
      (gamesResponse) => {
        console.log(gamesResponse);
        this.gamesList = gamesResponse['amiibo'];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
