import { ProductService } from './components/service/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ShareComponent } from './components/share/share.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    ProductEditComponent,
    ProductAddComponent,
    ShareComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
