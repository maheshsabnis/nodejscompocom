import { HttpService } from './../../../services/app.http.service';
import { ProductInfo } from './../../../models/app.product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-productlist-component',
  templateUrl: 'app.productlist.view.html'
})

export class ProductListComponent implements OnInit {
  products: Array<ProductInfo>;
  message: string;
  constructor(private serv: HttpService, private router:Router) {
    this.products = new Array<ProductInfo>();
    this.message = "";
  }

  ngOnInit() {
    this.serv.getData().subscribe((response)=>{
      this.products = response;
      this.message = 'Data Fetch Successfull';
    },(error)=>{
      this.message = `Data Fetch Failed ${error.message}`;
    });
  }

  navigateToEdit(id:number):void {
    // navigate to the edit:id
    this.router.navigate(['edit',id]);
  }
}
