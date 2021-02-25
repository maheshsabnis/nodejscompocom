import { Employees } from '../../models/app.employee.mode';
import { Component, OnInit } from "@angular/core";
import { FormGroup,FormControl } from "@angular/forms";
import { Logic } from '../../models/app.logic';
import {ProductInfo} from '../../models/app.product.model';
import { Categories, Manufacturers } from "../../models/app.constants";

@Component({
  selector: 'app-productreactiveform-component',
  templateUrl:'app.productreactiveform.view.html'
})
export class ProductReactiveFormComponent implements OnInit{
    product: ProductInfo;
    products: Array<ProductInfo>;
    private logic:Logic;
    columnHeaders:Array<string>;
    categories = Categories;
    manufacturers = Manufacturers;
    employees = Employees
    frmProduct : FormGroup;
    constructor(){
      this.product = new ProductInfo(0, '', '', '', '','',0);
      this.products = new Array<ProductInfo>();
      this.logic = new Logic();
      this.columnHeaders = new Array<string>();
      console.log('Constructor Called');

      this.frmProduct = new FormGroup({
        // key:new FormControl(the state of control aka the public property from the Model class)
        // the 'key' will be used to bind the state with editable element inside the <form> using
        // formControlName
        ProductRowId: new FormControl(this.product.ProductRowId),
        ProductId: new FormControl(this.product.ProductId),
        ProductName: new FormControl(this.product.ProductName),
        CategoryName: new FormControl(this.product.CategoryName),
        Manufacturer: new FormControl(this.product.Manufacturer),
        Description: new FormControl(this.product.Description),
        BasePrice: new FormControl(this.product.BasePrice)
      });
    }

    ngOnInit():void {
      console.log('ng on init Called');

      this.columnHeaders = Object.keys(this.product);
      console.log(this.columnHeaders);

      this.products = this.logic.getProducts();
    }

    clear():void {
      this.product = new ProductInfo(0, '', '', '', '','',0);
      // using setValue() the empty product instance is passed to FormGroup
      this.frmProduct.setValue(this.product);
    }
    save():void {
      // read the value of the formGroup to receive the value for 'product'
      this.product = this.frmProduct.value;
      this.products = this.logic.addProduct(this.product);
    }


    getSelectedProduct(evt:any):void {
      this.product = Object.assign({}, evt);
      this.frmProduct.setValue(this.product);
    }
}
