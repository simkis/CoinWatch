import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Favorite } from '../data/Favorite';

@Injectable()
export class FavoritesRepository {

    private FAVORITES_KEY = "FAVORITES"

    constructor(private storage: Storage) {
    }

    getAll(): Promise<Favorite[]> {
        return this.storage.get(this.FAVORITES_KEY)
    }

    save(favorite: Favorite) {
        this.getAll().then(all => {
            if (all) {
                all.push(favorite)
                this.storage.set(this.FAVORITES_KEY, all)
            } else {
                this.storage.set(this.FAVORITES_KEY, [favorite])
            }
        })
    }
}