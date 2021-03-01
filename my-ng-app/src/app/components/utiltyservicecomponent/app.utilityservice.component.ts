import { Component, OnInit } from '@angular/core';
import { UtilityService } from "./../../services/app.utility.service";
@Component({
  selector: 'app-utilityservice-component',
  template: `
    <h3>The Utiltity Service</h3>
    <strong>
      Length of {{name}} = {{length}}
    </strong>
    <br/>
    <strong>
      Upper Case of {{name}} = {{upperName}}
    </strong>
    <br/>
    <strong>
      Lower Case of {{name}} = {{lowerName}}
    </strong>

  `
})
export class UtiltyServiceComponent implements OnInit {
  name:string;
  length:number;
  upperName:string;
  lowerName:string;

  // injecting the service as Dependency Injection
  constructor(private serv:UtilityService) {
    this.name = 'The Angular Service Demo';
    this.length = 0;
    this.upperName = '';
    this.lowerName = '';
  }

  ngOnInit(): void {
    this.length = this.serv.getLength(this.name);
    this.upperName = this.serv.changeCase(this.name, "U");
    this.lowerName = this.serv.changeCase(this.name, "L");
  }
}
