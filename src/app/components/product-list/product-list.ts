import { Component } from '@angular/core';
import { Product } from '../../Models/product';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html'
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 60000,
      image: '',
      inStock: true
    },
    {
      id: 2,
      name: 'Mobile',
      price: 25000,
      image: '',
      inStock: false
    }
  ];
}