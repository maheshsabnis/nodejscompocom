import { LifecycleParentComponent, LifecycleChildComponent } from './components/lifecyclecomponent/app.lifecycle.component';
import { EditProductComponent } from './components/routingapp/editpeoductcomponent/app.editproduct.component';
import { CreateProductComponent } from './components/routingapp/createproductcomponent/app.createproduct.component';
import { ProductListComponent } from './components/routingapp/productlistcomponent/app.productlist.component';
import { MainRouterComponent } from './components/routingapp/app.mainrouter.component';
import { HttpInterceptorService } from './services/app.httpinterceptor.service';
import { HttpCallComponent } from './components/httpcallcomponent/app.httpcall.component';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from "./components/productcomponent/app.product.component";
// importing the service
import { UtilityService } from "./services/app.utility.service";


@NgModule({
  declarations: [
    AppComponent,ProductComponent,ProductReactiveFormComponent,
    DataTableComponent, ColorDirective,
    UtiltyServiceComponent, HttpCallComponent,
    SenderComponent, ReceiverComponent,
    MainRouterComponent, ProductListComponent,CreateProductComponent,
    EditProductComponent,
    LifecycleParentComponent, LifecycleChildComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule, HttpClientModule,
    // importing of the AppRoutingModule
    // will load the RouterModule.forRoot() on the root of the
    // current angular application
    AppRoutingModule
  ],
  // register the service
  // register the Interceptor
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi:true
  }],
  bootstrap: [ LifecycleParentComponent]
})
export class AppModule { }
