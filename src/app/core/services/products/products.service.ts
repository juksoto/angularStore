import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../../product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  constructor(
    private http: HttpClient
  ) {}

  getAllProducts() {
    // <Product> le indicamos a angular que este get resuelve un tipo array
    return this.http.get<Product[]>('http://platzi-store.herokuapp.com/products');
  }

  getProduct(id: string) {
    return this.http.get(`http://platzi-store.herokuapp.com/products/${id}`);
  }
}
