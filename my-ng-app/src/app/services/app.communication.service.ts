import { Injectable, EventEmitter } from '@angular/core';


@Injectable({providedIn: 'root'})
export class CommunicationService {
  id:any;
  emitData:EventEmitter<any>;
  constructor() {
    this.id= 0;
    this.emitData = new EventEmitter<any>();
  }
  onDataReceived(data:any) :void {
    // emit data thet is send by the sender
    this.emitData.emit(data);
  }
}
