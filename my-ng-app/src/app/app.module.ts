import { ProductReactiveFormComponent } from './components/productreactiveformcomponent/app.productreactiveform.component';
import { DataTableComponent } from './directives/componentdirective/tabledirective/app.table.componet.directive';
 ;
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// FormsModule, used for executing ngModel
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from "./components/productcomponent/app.product.component";
//


@NgModule({
  declarations: [
    AppComponent,ProductComponent,ProductReactiveFormComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductReactiveFormComponent]
})
export class AppModule { }
