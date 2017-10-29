import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Coin } from '../data/Coin';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class RESTClient {
  BASE_URL = "https://api.coinmarketcap.com/v1/ticker/?limit=100"
  constructor(private http: HttpClient) {

  }

  public getCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.BASE_URL)
    .map(coins=> coins.map(coinData=> Object.assign(new Coin(),coinData)))
  }
}