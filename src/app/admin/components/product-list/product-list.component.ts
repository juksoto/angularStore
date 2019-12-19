import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../core/services/products/products.service'
import { Product } from '../../../product/models/product.model';

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

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'Nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'Esta es la descripcion'
    };

    this.productService.createProduct(newProduct)
    .subscribe(product => {
      // products es un object... this products es una array
      console.log(product);
      //this.product = product;
    });
  }
    updateProduct() {
    const updateProduct: Partial<Product> = {
      title: 'Nuevo Cambio',
      price: 555,
    };

    this.productService.updateProduct('2', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }
  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
    // suscribe para ver si se ejecuta
    .subscribe(product => {
      //console.log(product);
      // ejecutamos neuvamente el listado.
      this.fetchProducts();
    });
  }

}
