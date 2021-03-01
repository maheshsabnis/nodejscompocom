import { CommunicationService } from './../../services/app.communication.service';
import { Component, OnInit } from '@angular/core';
import { Products } from "./../../models/app.communication.models";
@Component({
  selector: 'app-receiver-component',
  template: `
    <h2>
      The Product Receiver Component
    </h2>
    <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Prd Id</th>
            <th>Prd Name</th>
            <th>Cat Id</th>
          </tr>
        </thead>
        <tbody>
           <tr *ngFor="let prd of FilterProducts">
              <td>{{prd.PrdId}}</td>
              <td>{{prd.PrdName}}</td>
              <td>{{prd.CatId}}</td>
           </tr>
        </tbody>
    </table>
  `
})
export class ReceiverComponent implements OnInit {
  products = Products;
  catId:number;
  private _filterProducts:Array<any>;
  constructor(private serv:CommunicationService) {
    this.catId = 0;
    this._filterProducts = new Array<any>();
  }

  ngOnInit(): void {
     // subscribe to the even emitted by the service so that the data can be
     // received
     this.serv.emitData.subscribe((id)=>{
        // assign the receibed data
        // to catId
        this.catId = id;
        console.log(`Received CatId ${this.catId}`);
     });
  }
  // create a readonly property that will be bound with the HTML table.
  // This property will be executed when the catId is changed/ updated
  // by the component

  get FilterProducts():Array<any> {
    this._filterProducts = new Array<any>();
    if(this.catId >0) {
      // filter products those matches with catId
      this._filterProducts = this.products.filter((p,i)=> {
        return p.CatId === this.catId;
      });
    } else {
      this._filterProducts = this.products;
    }
    return this._filterProducts;
  }



}
