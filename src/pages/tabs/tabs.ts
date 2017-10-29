import { Component } from '@angular/core';

import { FavoritesPage } from '../favorites/favorites';
import { AllPage } from '../all/all';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  allRoot = AllPage;
  favoritesRoot = FavoritesPage;

  constructor() {

  }
}
