import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  {
    path:'',redirectTo:"Home",pathMatch:"full"
  },
  {
path:"Home",component:HomeComponent
  },
{
  path:'Products',loadChildren:() =>import('./products/products.module').then(m => m.ProductsModule)
},
{
  path:"**",component:NotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
