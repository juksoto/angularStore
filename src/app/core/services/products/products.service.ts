import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../../product/models/product.model';

// importamos las url de los api servicios
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(
    private http: HttpClient
  ) {}

  getAllProducts() {
    // <Product> le indicamos a angular que este get resuelve un tipo array
    return this.http.get<Product[]>(environment.url_api);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(environment.url_api, product);
  }
}
