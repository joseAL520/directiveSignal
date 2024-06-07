import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products.routing.module';

import { ProductPagesComponent } from './pages/product-pages/product-pages.component';



@NgModule({
  declarations: [
    ProductPagesComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
