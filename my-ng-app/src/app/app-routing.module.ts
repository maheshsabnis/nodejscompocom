import { HttpCallComponent } from './components/httpcallcomponent/app.httpcall.component';
import { SenderComponent } from './components/componentcommunication/app.sender.component';
import { EditProductComponent } from './components/routingapp/editpeoductcomponent/app.editproduct.component';
import { CreateProductComponent } from './components/routingapp/createproductcomponent/app.createproduct.component';
import { ProductListComponent } from './components/routingapp/productlistcomponent/app.productlist.component';
import { NgModule } from '@angular/core';
// RouterModule: Provides an infrastructure for routing
import { RouterModule, Routes } from '@angular/router';

// route table
// the 'Routes' is a route table that contains
// collection of 'Route'
// Route has following properties
// path: the UriTemplate, used as URL to query to route table and locate component
// component: The name of the component to navigate to
// children: The array property of the type Route[] that contains child / sub routing
// redirectTo: the default redirection if 'path' is not matched / found during routing
// canActivate: Used for Routed Guards, role-based routing
// data: contains information of role-based routing e.g. Role Name, User Name, etc.
// loadChildren: Used for Lazy Loading to load other modules for rountin in current application at runtime
const routes: Routes = [
  {path:'', component:ProductListComponent, children:[
    {path: 'categories', component:SenderComponent},
    {path: 'httpcall', component:HttpCallComponent}
  ]},
  {path:'create', component:CreateProductComponent},
  {path:'edit/:id', component:EditProductComponent}, // route parameter
  {path: 'lazy', loadChildren:()=> import('./../libmodule/app.feature.module')
                              .then(module=>module.FeatureModule)},
  {path:'**', redirectTo:''} // if path other that '' / create then redirectTo to default
];

@NgModule({
          // load the route table on the Root of the Angular application
          // which is imporing the curren module i.e. RouterModule
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // exporing the ROuterModule so that when it is imported by any Angular module the route table will be loaded
})
export class AppRoutingModule { }
