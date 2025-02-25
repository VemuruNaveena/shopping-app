import { Component, inject } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games',
  standalone: false,
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {

  name: string;

  gamesService = inject(GamesService)


  constructor() {
    this.fetchGames();
    this.add(1, 2);
    this.name = 'Ang'
  }

  fetchGames() {
   // this.gamesService.
  }

  add(n1: number, n2: number) {
    // let  const var
    const result: number = n1+n2;
    console.log(result)
    //
    //
  }

}
