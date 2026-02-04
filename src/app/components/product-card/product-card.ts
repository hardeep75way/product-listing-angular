import { Component, Input } from '@angular/core';
import { Product } from '../../Models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html'
})
export class ProductCardComponent {
  @Input() product!: Product;

  addToCart() {
    alert(this.product.name + ' added to cart');
  }
}