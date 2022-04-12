export class Card {

  constructor(public title: string, public description: string, public state: 'to-do' | 'in-progress' | 'done' = 'to-do') {
  }
}
