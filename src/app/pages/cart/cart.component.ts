import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  getCart() {
    console.log(this.cartService.getCart());
    return this.cartService.getCart();
  }
}
