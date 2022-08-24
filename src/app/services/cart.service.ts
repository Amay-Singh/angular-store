import { Injectable } from '@angular/core';
import { Product } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  constructor() { }

  addToCart(product: Product) {
    const ind = this.items.findIndex(item => item.id === product.id);
    if(ind != -1) {
      this.items[ind].quantity += 1;
    } else {
      this.items.push(product);
    }

  }

  getItems() {
    return this.items;
  }

  itemsCount(){
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
