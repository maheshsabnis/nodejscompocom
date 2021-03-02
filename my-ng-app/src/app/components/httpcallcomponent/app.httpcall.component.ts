import { SecureInterceptorCallService } from './../../services/app.securecall-inrterceptor.service copy';
import { RegisterUser, AuthUser, ProductResponse } from './../../models/app.security.models';
import { SecureCallService } from './../../services/app.securecall.service';
import { ProductInfo } from './../../models/app.product.model';
import { HttpService } from './../../services/app.http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpcall-component',
  templateUrl: 'app.httpcall.view.html'
})

export class HttpCallComponent implements OnInit {

  prd:ProductInfo;
  products: Array<ProductInfo>;
  message: string;
  productsResponse:Array<ProductResponse>;
  // inject the service
  constructor(private serv:HttpService, private secserv:SecureCallService,
      private servIntercept: SecureInterceptorCallService) {
    this.prd = new ProductInfo(0,'','','','','',0);
    this.products  =new Array<ProductInfo>();
    this.message = "";
    this.productsResponse  =new Array<ProductResponse>();
  }

  ngOnInit() {
    this.loadData();
  }
  // call the get method from the Service
  loadData():void {
    this.serv.getData().subscribe((response)=>{
       // success data notified from Observable to client
       this.products = response;
       console.log(JSON.stringify(this.products));
       this.message = 'Data Received Successfully!!!!';
    },(error)=>{
      // error data notified from Observable to client
      this.message = `Data Fetch failed ${error.message}`
    });
  }

  // call the get method from the Service
  save():void {
    this.prd = new ProductInfo(0,'Prd-002','Iron','Electrical','TS-Electrical','Power Press',1200);
    this.serv.postData(this.prd).subscribe((response)=>{
       // success data notified from Observable to client
       this.products.push(response);
       this.message = 'Data Received Successfully!!!!';
    },(error)=>{
      // error data notified from Observable to client
      this.message = `Data Fetch failed ${error.message}`
    });
  }

  registerAppUser():void {
    let user = new RegisterUser("tejas001@msit.com", "P@ssw0rd_", "P@ssw0rd_");
    this.secserv.registerUser(user).subscribe((resp)=>{
        this.message = resp;
    },(error)=>{
      this.message = `Operation failed ${error.message}`
    });
  }

  loginAppUser():void {
    let user = new AuthUser("tejas001@msit.com", "P@ssw0rd_");
    this.secserv.authUser(user).subscribe((resp)=>{
        this.message = resp.Message; // receive token from service after login
        // save the token in the sessionStorage of the Browser
        sessionStorage.setItem("token", this.message);
    },(error)=>{
      this.message = `Operation failed ${error.message}`
    });
  }

  fetchProductsData():void {
    // read token from sessionStorage
    let token:any = sessionStorage.getItem("token");
    this.secserv.fetchData(token).subscribe((response)=>{
        this.productsResponse = response;
    },(error)=>{
      this.message = `Operation failed ${error.message}`
    });
  }


  loginAppUserIntercept():void {
    let user = new AuthUser("tejas001@msit.com", "P@ssw0rd_");
    this.servIntercept.authUser(user).subscribe((resp)=>{
        this.message = resp.Message; // receive token from service after login
        // save the token in the sessionStorage of the Browser
        sessionStorage.setItem("token", this.message);
    },(error)=>{
      this.message = `Operation failed ${error.message}`
    });
  }

  fetchProductsDataItecept():void {
    this.servIntercept.fetchData().subscribe((response)=>{
        this.productsResponse = response;
    },(error)=>{
      this.message = `Operation failed ${error.message}`
    });
  }


}
