import {EventEmitter, Injectable} from '@angular/core';
import {Card} from './models/card';
import {CardApiService} from './card-api.service';
import {CardState} from './models/card-state';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  public newCardEmitter = new EventEmitter<Card>();

  constructor(private api: CardApiService) { }

  public getCards(state: CardState): Observable<Card[]> {
    return this.api.getCards(state);
  }

  public addCard(card: Card): void {
    this.api.createCard(card).subscribe((cardFromServer) => {
      this.newCardEmitter.emit(cardFromServer);
    });
  }
}
