export class Coin {

    id: string;
    name: string;
    symbol: string;
    rank: number;
    price_usd: number;
    price_btc: number;
    market_cap_usd: number;
    available_supply: number;
    total_supply: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    last_updated: number;

    get isRising_1h(): Boolean {
        return this.percent_change_1h > 0;
    }

    get isRising_24h(): Boolean {
        return this.percent_change_24h > 0;
    }
    get isRising_7d(): Boolean {
        return this.percent_change_7d > 0;
    }

    containsName(searchQuery: string) {
        return this.name.toLocaleLowerCase().indexOf(searchQuery) >= 0 ||
        this.symbol.toLocaleLowerCase().indexOf(searchQuery) >= 0
    }

}