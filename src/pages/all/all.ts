import { Component, OnInit } from '@angular/core';
import { NavController, Refresher } from 'ionic-angular';
import { RESTClient } from '../../network/RESTClient';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Coin } from '../../data/Coin';
import 'rxjs/add/operator/debounceTime';
import { FavoritesRepository } from '../../repository/FavoritesRepository';
import { Favorite } from '../../data/Favorite';

@Component({
  selector: 'page-all',
  templateUrl: 'all.html'
})
export class AllPage implements OnInit {

  allCoins: Coin[]
  filteredCoins: Coin[]
  searchObservable = new BehaviorSubject<string>("")

  constructor(public navCtrl: NavController,
    private restClient: RESTClient,
    private favoritesRepository: FavoritesRepository) {

  }
  ngOnInit(): void {
    this.restClient.getCoins().subscribe(coins => {
      this.allCoins = coins;
      this.searchObservable
        .debounceTime(250)
        .map(searchQuery => searchQuery.toLocaleLowerCase())
        .map(searchQuery => this.allCoins.filter(coin => coin.containsName(searchQuery)))
        .subscribe(filteredCoins => {
          this.filteredCoins = filteredCoins
        })
    });
  }

  getClass(coin: Coin): String {
    return coin.isRising_24h ? "green" : "red"
  }
  onRefresh(refresher: Refresher) {
    this.restClient.getCoins().subscribe(coins => {
      this.allCoins = coins;
      refresher.complete();
    });
  }
  onSearch(event: any) {
    let searchQuery = event.target.value ? event.target.value : ""
    this.searchObservable.next(searchQuery)
  }
}
