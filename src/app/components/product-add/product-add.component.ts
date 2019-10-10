import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductFetch } from '../productfetch';
import { DataService } from '../service/data.service';
import { Product } from '../model/Iproduct';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productFormGroup: FormGroup;
  products: Product[];
  productFrtchAdd: ProductFetch;


  constructor(private dataService: DataService) { }
  getProduct() {
    this.dataService.getProduct().subscribe(data => {
      this.products = data;
    });
  }

  ngOnInit() {
    this.productFormGroup = new FormGroup(
      {
        id: new FormControl(''),
        name: new FormControl(''),
        price: new FormControl(''),
        rate: new FormControl(''),
        des: new FormControl(''),
        img: new FormControl(''),
      },
    );
    this.getProduct();
  }

  addProduct() {
    this.dataService.addProduct(this.productFormGroup.value).subscribe(data => {
      this.productFrtchAdd = data;
      console.log(this.productFrtchAdd);
    });
    this.addProduct();
  }
}
