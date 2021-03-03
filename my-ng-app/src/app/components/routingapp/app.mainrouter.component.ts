import { Component, OnInit } from '@angular/core';

// [routerLink], is the attribute directive for <a></a> tag to
// query to route table based on the 'path' and locate and load the
// component
// <router-outlet>, is the Component Directive executed by RouterModule
// this is used to load and render the component being routed
// using [routerLink]
@Component({
  selector: 'app-mainrouter-component',
  template: `
     <h3>The Routing App</h3>
     <table class="table table-bordered table-striped">
       <tbody>
         <tr>
           <td>
             <a [routerLink]="['']">List</a>
           </td>
           <td>
             <a [routerLink]="['create']">Create</a>
           </td>
           <td>
             <a [routerLink]="['lazy']">Lazy Feature</a>
           </td>
         </tr>
       </tbody>
     </table>
     <hr>
     <router-outlet></router-outlet>

  `
})
export class MainRouterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
