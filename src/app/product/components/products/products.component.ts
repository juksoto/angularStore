import { Component, OnInit, ɵConsole } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log(id);
  }

  fetchProducts () {
    // subscribe -> se conecta cualquier cambio que hagan.
    this.productsService.getAllProducts()
    .subscribe(products => {
      // products es un object... this products es una array
      this.products = products;
    })
  }
  
}
