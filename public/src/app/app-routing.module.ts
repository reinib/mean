import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateProductComponent} from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/home"
  },
  {
    path: 'products/new',
    component:CreateProductComponent
  },
  {
    path: 'products/:product_id',
    component:ViewProductComponent
  },
  {
  path: 'products/edit/:product_id',
  component:EditProductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
