import { HttpService } from './../../../services/app.http.service';
import { Manufacturers,Categories } from './../../../models/app.constants';

import { ProductInfo } from './../../../models/app.product.model';
import { Component, OnInit } from '@angular/core';
// Router: The class used for event based navigation
// ActivatedRoute: The class used to subscribe to Route URL and reads
// the route parameter
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-editproduct-component',
  templateUrl: './app.editproduct.view.html'
})
export class EditProductComponent implements OnInit {
  product: ProductInfo;
  categories = Categories;
  manufacturers = Manufacturers;
  // inject the 'Router' as constructor injection
  // this injection will be resolved by the RouterModule
  // inject the 'ActivatedRoute' as constructor injection
  // this injection will be resolved by the RouterModule
  constructor(private serv:HttpService, private router:Router,
     private act:ActivatedRoute) {
    this.product  =new ProductInfo(0,'','','','','',0);
  }

  // subscribe to the route url to read
  // the parameter and based on it
  // fetch the product info for edit
  ngOnInit(): void {
    this.act.params.subscribe((param)=>{
      this.product.ProductRowId = param.id;
      // fetch data
      this.serv.getDataById(this.product.ProductRowId)
        .subscribe((response)=>{
          this.product = response;
        },(error)=>{
            console.log(`Error Occured ${error.message}`);
        });
    })
  }
  clear():void {
    this.product  =new ProductInfo(0,'','','','','',0);
  }
  save():void {
    this.serv.putData(this.product.ProductRowId,this.product).subscribe((response)=>{
      this.product = response;
      // navigate back to the list
      this.router.navigate(['']);
    },(error)=>{
        console.log(`Error Occured ${error.message}`);
    });
  }
}
