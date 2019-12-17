import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule ({
    declarations: [
        ProductDetailComponent,
        ProductsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProductRoutingModule
    ]
})
export class ProductModule {

}
