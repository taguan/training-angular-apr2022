import {CardState} from './card-state';

export class Card {

  constructor(public title: string, public description: string, public id?: string, public state: CardState = 'to-do') {
  }
}
