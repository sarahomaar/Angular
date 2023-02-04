import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CardComponent } from './card/card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
let productsRoute:Routes=[
  {path:"",redirectTo:"Products/product-details",pathMatch:"full"},
  {path:"Product-details",component:ProductDetailsComponent},
  {path:"card",component:CardComponent},

];

@NgModule({
  declarations: [
    CardComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    RouterModule.forChild(productsRoute)
  ],
  exports:[RouterModule]
})
export class ProductsModule { }
