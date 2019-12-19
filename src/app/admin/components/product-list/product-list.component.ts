import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../core/services/products/products.service'
import { ProductsComponent } from 'src/app/product/components/products/products.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [];
  // Cantidad de columnas. Seguimos el api de table.
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts()
    .subscribe( products => {
      console.log(products);
      this.products = products;
    });
  }
}
