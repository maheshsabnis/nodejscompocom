
// OnInit ngOnInit, OnChanges ngOnChanges, OnDestroy ngOnDestroy
import { Component, OnInit, OnChanges, OnDestroy, Input, AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-lifecycleparent-component',
  template: `
    <h2>The Parent Component</h2>
    <input type="text" [(ngModel)]="parentValue"/>
    <br/>
    <input type="button" value="show/hide" (click)="toggle()"/>
    <hr/>
    <div *ngIf="isDisplay">
    <app-lifecyclechild-component [value]="parentValue"></app-lifecyclechild-component>
    </div>
`
})
export class LifecycleParentComponent implements OnInit, OnChanges {
  parentValue: string;
  isDisplay: boolean;
  constructor() {
    this.parentValue = '';
    this.isDisplay = true;
    console.log('Constructor called on Parent');
  }

  ngOnChanges():void {
    console.log(`on Changes called on Parent`);
  }

  toggle(): void {
    if(this.isDisplay) {
      this.isDisplay = false;
    } else {
      this.isDisplay = true;
    }
  }
  ngOnInit() { }
}

@Component({
  selector: 'app-lifecyclechild-component',
  template: `
     <h5>The Child Component</h5>
     <div>{{value}}</div>
     <div>
        Data Updated aftre data receive from parent{{strData}}
     </div>
     <hr/>
     <div>Mouse Position x = {{x}}: y = {{y}}</div>
  `
})
export class LifecycleChildComponent implements OnInit, OnChanges, OnDestroy,AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked  {
  @Input() value: string;
  strData:string;
  x: number;
  y: number;
  constructor(){
    this.value = '';
    console.log('Child Constructor Called');
    this.x = 0;
    this.y = 0;
    window.addEventListener('mousemove', this.detectMousePosition);
    this.strData = '';
  }
  detectMousePosition =(evt:any)=> {
    this.x = evt.clientX;
    this.y = evt.clientY;
  }
  ngOnInit(): void {

    console.log('ng on init Called on child');
  }
  ngOnChanges(): void {
    this.strData += this.value;
    console.log('ng on changes Called on child');
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    // write the logic to hold the DOM generation
    // when the  *ngFor *ngIf us trying to Update DOM
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log('ng destroy Called on child');
    window.removeEventListener('mousemovde', this.detectMousePosition);
  }
}
