import { Injectable } from '@angular/core';
import { item, Product } from '../../data/products';

@Injectable({
  providedIn: 'root',
})
// map or find -> not undfeined added to new cart
export class CartService {
  private cart: item[] = [];
  // quantity = 0;
  constructor() {}

  addToCart(product: Product) {
    const inCart = this.cart.find((x) => x.product === product);
    if (inCart) {
      inCart.quantity++;
      // this.quantity += 1;
      // console.log(this.quantity);
    } else {
      this.cart.push({ product: product, quantity: 1 });
    }
  }

  getCart() {
    return this.cart;
    // return this.cart && this.quantity;
  }
}
