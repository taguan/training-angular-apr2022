import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Card} from '../models/card';
import {CardService} from '../card.service';

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.css']
})
export class CreateCardFormComponent implements OnInit {

  public newCardForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', Validators.required)
  });

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  addCard() {
    if (this.newCardForm.valid) {
      const card = new Card(this.newCardForm.get('title')?.value, this.newCardForm.get('description')?.value);
      this.cardService.addCard(card);
    }
  }
}
