import { Component } from '@angular/core';
import { Product, PRODUCTS } from '../../../data/products';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = PRODUCTS;

  constructor(private cartService: CartService) {
    console.log(this.cartService.getCart());
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
