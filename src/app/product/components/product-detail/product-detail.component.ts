import { Component, OnInit } from '@angular/core';
// importamos agular router para recibir un parametro por id
/* ActivateRoute -> inyeccion de dependencia */
/* Params -> parametros */
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    // detectar si hay cambios en los parametros. Me suscribo a ese cambio. Envio un array como parametro
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    //  this.product = this.productsService.getProduct(id);
    } );
  }

  fetchProduct( id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      // products es un object... this products es una array
      this.product = product;
    });
  }
}
