import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScrumColumnComponent } from './scrum-column/scrum-column.component';
import { ScrumCardComponent } from './scrum-card/scrum-card.component';
import { CreateCardFormComponent } from './create-card-form/create-card-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ScrumColumnComponent,
    ScrumCardComponent,
    CreateCardFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
