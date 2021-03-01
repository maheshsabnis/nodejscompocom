import { CommunicationService } from './../../services/app.communication.service';
import { Component, OnInit } from '@angular/core';
import { Categories } from "./../../models/app.communication.models";
@Component({
  selector: 'app-sender-component',
  template: `
    <h2>
      The Category Sender Component
    </h2>
    <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Cat Id</th>
            <th>Cat Name</th>
          </tr>
        </thead>
        <tbody>
           <tr *ngFor="let cat of categories"
            (click)="getSelectedCat(cat)">
              <td>{{cat.CatId}}</td>
              <td>{{cat.CatName}}</td>
           </tr>
        </tbody>
    </table>
  `
})
export class SenderComponent implements OnInit {
  categories = Categories;
  constructor(private serv:CommunicationService) { }

  ngOnInit(): void { }

  getSelectedCat(cat:any):void{
    // passing data by calling method from the service
    this.serv.onDataReceived(cat.CatId);
  }
}
