import {Component, Input, OnInit} from '@angular/core';
import {CardService} from '../card.service';
import {Card} from '../models/card';

@Component({
  selector: 'app-scrum-column',
  templateUrl: './scrum-column.component.html',
  styleUrls: ['./scrum-column.component.css']
})
export class ScrumColumnComponent implements OnInit {

  @Input()
  public title = '';

  @Input()
  public state : 'to-do' | 'in-progress' | 'done' = 'to-do';

  public cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cards = this.cardService.getCards(this.state);
    this.cardService.newCardEmitter.subscribe(card => {
      if (card.state === this.state) {
        this.cards.push(card);
      }
    })
  }

}
