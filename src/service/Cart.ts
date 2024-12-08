import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sum(){
        let totalSum = 0;
        this._items.forEach(item => {
            totalSum += item.price;
        });

        return totalSum;
    }

    sumSale(sale: number){
        return this.sum() * (1 - sale);
    }

    deleteId(ID: number): void {
        this._items = this._items.filter(item => item["id"] !== ID);
    }
}