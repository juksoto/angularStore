import { Component, OnInit, ɵConsole } from '@angular/core';
import { ProductsService } from '../products.service';

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
    this.products =  this.productsService.getAllProducts();
  }

  clickProduct(id: number) {
    console.log(id);
  }
}
