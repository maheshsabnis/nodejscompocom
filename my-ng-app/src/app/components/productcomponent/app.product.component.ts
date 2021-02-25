import { Employees } from './../../models/app.employee.mode';
import { Component, OnInit } from "@angular/core";
import { Logic } from './../../models/app.logic';
import {ProductInfo} from './../../models/app.product.model';
import { Categories, Manufacturers } from "./../../models/app.constants";
@Component({
  selector: 'app-product-component',
  templateUrl:'app.product.view.html'
})
export class ProductComponent implements OnInit{  // the OnInit is implemented by Component
    product: ProductInfo;
    products: Array<ProductInfo>;
    private logic:Logic;
    columnHeaders:Array<string>;
    // save constants array data into local public properties
    categories = Categories;
    manufacturers = Manufacturers;
    employees = Employees
    constructor(){
      this.product = new ProductInfo(0, '', '', '', '','',0);
      this.products = new Array<ProductInfo>();
      this.logic = new Logic();
      this.columnHeaders = new Array<string>();
      console.log('Constructor Called');
    }

    ngOnInit():void {
      console.log('ng on init Called');
      // read all public data members' name of the ProductInfo class and add
      // it in columnHeaders array
      this.columnHeaders = Object.keys(this.product);
      console.log(this.columnHeaders);
        // read all products
      this.products = this.logic.getProducts();
    }

    clear():void {
      this.product = new ProductInfo(0, '', '', '', '','',0);
    }
    save():void {
      this.products = this.logic.addProduct(this.product);
    }
    // getSelectedProduct(prd:ProductInfo):void {
    //   // this.product = prd;
    //   // use Object.assign(target, source);
    //   // target is an object in which source will be copied with its schema and values
    //   // but source and target are physicallyu different objects
    //   this.product = Object.assign({}, prd);
    // }

    getSelectedProduct(evt:any):void {
      this.product = Object.assign({}, evt);
    }
}
