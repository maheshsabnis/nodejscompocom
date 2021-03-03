import { HttpService } from './../../../services/app.http.service';
import { Manufacturers,Categories } from './../../../models/app.constants';

import { ProductInfo } from './../../../models/app.product.model';
import { Component, OnInit } from '@angular/core';
// Router: The class used for event based navigation
import { Router } from "@angular/router";


@Component({
  selector: 'app-createproduct-component',
  templateUrl: './app.createproduct.view.html'
})
export class CreateProductComponent implements OnInit {
  product: ProductInfo;
  categories = Categories;
  manufacturers = Manufacturers;
  // inject the 'Router' as constructor injection
  // this injection will be resolved by the RouterModule
  constructor(private serv:HttpService, private router:Router) {
    this.product  =new ProductInfo(0,'','','','','',0);
  }

  ngOnInit(): void { }
  clear():void {
    this.product  =new ProductInfo(0,'','','','','',0);
  }
  save():void {
    this.serv.postData(this.product).subscribe((response)=>{
      this.product = response;
      // navigate back to the list
      this.router.navigate(['']);
    },(error)=>{
        console.log(`Error Occured ${error.message}`);
    });
  }
}
