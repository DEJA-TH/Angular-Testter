import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Iproduct';
import { DataService } from '../service/data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductFetch } from '../productfetch';
import { ProductAddComponent } from '../product-add/product-add.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private dataService: DataService, private httpClient: HttpClient ) {}
  fetchId = 1;
  productFetch: ProductFetch;
  displayData: boolean;
  products: Product [] = [];
  iDdelete = 0;

  // getFetch() {
  //   this.dataService.getProduct(this.fetchId).subscribe(data => {
  //     this.productFetch = data;
  //     this.displayData = true;
  //   });
  // }
  getProduct() {
    this.dataService.getProduct().subscribe(data => {
      this.products = data;
    });
  }

   deleteProduct() {
     this.dataService.deleteProduct(name).subscribe(data => {
       this.getProduct();
       //this.getProduct();
     });
   }
  ngOnInit() {
    this.getProduct();
    this.deleteProduct();
  }

}
