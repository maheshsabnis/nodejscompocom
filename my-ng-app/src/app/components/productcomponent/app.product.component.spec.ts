import { ColorDirective } from './../../directives/customattributedirective/app.color.directive';
import { DataTableComponent } from './../../directives/componentdirective/tabledirective/app.table.componet.directive';

// import all angular test objects
// TestBed: The Test configuration where all Angular Objects will be used for
// executed for testing. This obejct will load all Angular dependnecies
// in memory to load and test Angular Application
// async: Run the test asynchronously w/o blocking the executing thread for test
// ComponentFixture, represent the component and its dependencies along with HTML template
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
// import component to be tested
import { ProductComponent } from "./app.product.component";
// import all depednencies used by the component e.g. if Two-Way binding then import the FormsModule
import { ProductInfo } from "./../../models/app.product.model";
import { FormsModule } from "@angular/forms";

// test suit
describe('Product Component Test', ()=>{
  // 1. get the Compone t Reference
  let component: ProductComponent;
  // 2. define component fixture
  let fixture: ComponentFixture<ProductComponent>;
  // 3. define HTML element type so that it can be used to refer HTML element to register and dispacth event
  let button: HTMLElement;

  // configure the test environment where the NgModule will be instantiated
  // in memory and this will import standard modules and manage depednencies if any
  beforeEach(async()=>{
     TestBed.configureTestingModule({
       declarations:[ProductComponent, DataTableComponent, ColorDirective],
       imports:[FormsModule]
     }).compileComponents(); // make sure that the HTML temeplate is compiled successfully and all component's dependencies are loaded
  });

  // create an instance of the component so that the test cases can be executed on
  // methods of the component
   beforeEach(()=>{
     //  get the cpomponent instance
     fixture = TestBed.createComponent(ProductComponent);
     // make sure that the default bindings (Property/ Event / Two-Way) are executed ands HTML rendering is done
     component = fixture.componentInstance;
     // subscibe to the HTML changes based on binding e.g. *ngFor will generate DOM *ngIf will execute condition
     fixture.detectChanges();
   });


   // write the test case
   it('should calculate tax when the save button is clicked',()=>{
      // arrange
      // get the instances of object to be tested
      // get the test data
      let product = new ProductInfo(0,'','','','','',0);
      product.BasePrice = 300;
      component.product = product;
      // get the HTML element which is watched for rasiling the click event
      const htmlElement = fixture.nativeElement;
      // localte the HTML element based on selector
      button = htmlElement.querySelector('.btn-success');
      // act
      // use the test data to invoke a method from onbject being tested
      // dispatch the 'click' event
      const event = button.dispatchEvent(new Event('click'));
      // watch for any changes in HTML DOM for the component
      fixture.detectChanges();

      // assert
      // verify the result
      // note: check the output as string e.g. '6'
      expect(htmlElement.querySelector('input[disabled]').value).toEqual('6');
   });

});
