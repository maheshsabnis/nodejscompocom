import { ReceiverComponent } from './components/componentcommunication/app.receiver.component';
import { SenderComponent } from './components/componentcommunication/app.sender.component';
import { UtiltyServiceComponent } from './components/utiltyservicecomponent/app.utilityservice.component';
import { ColorDirective } from './directives/customattributedirective/app.color.directive';
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
// importing the service
import { UtilityService } from "./services/app.utility.service";


@NgModule({
  declarations: [
    AppComponent,ProductComponent,ProductReactiveFormComponent,
    DataTableComponent, ColorDirective,
    UtiltyServiceComponent,
    SenderComponent, ReceiverComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  // register the service
  providers: [],
  bootstrap: [ SenderComponent, ReceiverComponent]
})
export class AppModule { }
