import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductAddComponent } from './components/product-add/product-add.component';


const routes: Routes = [
  {path:'product',component:ProductComponent},
  {path:'edit',component:ProductEditComponent},
  {path:'add',component:ProductAddComponent},
  {path:'',redirectTo:'/product',pathMatch:'full'},
  // {path:'**',component:PageNotFound},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
