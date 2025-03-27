import { Component } from '@angular/core';

@Component({
  selector: 'app-women',
  standalone: false,
  templateUrl: './women.component.html',
  styleUrl: './women.component.scss',
})
export class WomenComponent {
  collections = [
    { game: 'xbox', rating: 5 },
    { game: 'PS', rating: 3 },
    { game: 'mobile', rating: 4 },
    { game: 'web', rating: 4 },
  ];

  constructor() {
    this.filterGamesbasedOnRating();
  }

  filterGamesbasedOnRating() {
    // const filteredGames = [];
    // this.collections.forEach((game) => {
    //   if (game.rating > 3) {
    //     console.log('Entered...');
    //     filteredGames.push(game);
    //   }
    // });
    // console.log(filteredGames);

    const result = this.collections.filter((game) => {
      return game.rating > 4;
    });

    console.log(result);
  }
}
