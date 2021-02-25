import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './app.table.component.directive.view.html'
})

export class DataTableComponent implements OnInit {
  private _DataSource:Array<any>;
  columHeaders:Array<string>;
  // the @OutPut decorator applied on event emitter
  // will be used by the parent component for event binding
  // (rowSelected)
  // the emitted data will be read by parent using $event object
  @Output()
  rowSelected:EventEmitter<any>;
  constructor() {
    this._DataSource = new Array<any>();
    this.columHeaders = new Array<string>();
    // the 'any' is the type of Payload (data) to be emitted from child to parent
    this.rowSelected = new EventEmitter<any>();
  }

  ngOnInit() {
    if(this._DataSource.length > 0) {
      // reading the schema of 0th record from array
      // and store these schemas in column header
      this.columHeaders = Object.keys(this._DataSource[0]);
    }
  }

  // the DataSource property will be used for property binding in parent
  // [DataSource]
  @Input()
  set DataSource(val:Array<any>){
    this._DataSource  =val;
  }
  get DataSource():Array<any> {
    return this._DataSource;
  }

  onRowSelected(row:any):void {
    this.rowSelected.emit(row);
  }
}
