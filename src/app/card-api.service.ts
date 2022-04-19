import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CardState} from './models/card-state';
import {Observable} from 'rxjs';
import {Card} from './models/card';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getCards(state?: CardState): Observable<Card[]> {
    let httpParams = new HttpParams();
    if (!!state) {
      httpParams = httpParams.set('state', state as string);
    }
    return this.http.get<Card[]>(`${this.baseUrl}/cards`, {
      params: httpParams
    });
  }

  public createCard(card: Card): Observable<Card> {
    return this.http.post<Card>(`${this.baseUrl}/cards`, card);
  }

  public updateCard(card: Card): Observable<Card> {
    return this.http.put<Card>(`${this.baseUrl}/cards/${card.id}`, card);
  }
}
