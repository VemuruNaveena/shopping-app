import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { amiiboI } from './games/games-interface';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  http = inject(HttpClient);
  gameName: string = 'COD';

  constructor() {}

  fetchgamesData(): Observable<amiiboI> {
    //return this.http.get<amiiboI>('https://www.freetogame.com/api/games');
    return this.http.get<amiiboI>(
      'https://www.amiiboapi.com/api/amiibo/?name=mario'
    );
  }
}
