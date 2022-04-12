import {EventEmitter, Injectable} from '@angular/core';
import {Card} from './models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  public newCardEmitter = new EventEmitter<Card>();

  private cards: Card[] = [
    new Card('Title 1', 'This is a description'),
    new Card('Title 2', 'This is a description'),
    new Card('Title 3', 'This is a description'),
    new Card('Title 4', 'This is a description', 'in-progress'),
    new Card('Title 5', 'This is a description', 'in-progress'),
    new Card('Title 6', 'This is a description', 'done'),
    new Card('Title 7', 'This is a description', 'done')
  ];

  constructor() { }

  public getCards(state: 'to-do' | 'in-progress' | 'done'): Card[] {
    return this.cards.filter(card => card.state === state);
  }

  public addCard(card: Card): void {
    this.cards.push(card);
    this.newCardEmitter.emit(card);
  }
}
