import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Passengers} from '../../../passenger';

@Component({
    selector:'passenger-actions',
    templateUrl: 'passenger-actions.component.html',
})
export class PassengerActionsComponent {
    constructor() {}
    //newList : Passengers[] = [];
    @Input() passengersList : Passengers[] = [];

    @Output()
    filter: EventEmitter<Passengers[]> = new EventEmitter();
    @Output()
    add: EventEmitter<any> = new EventEmitter();

    passengerList(state){
      //this.newList = [];
      this.passengersList.forEach((item) => {
        //le añado la propiedad display para saber si mostrarlo o no , dependiendo de si 
        // clikamos en ckeckin o nocheckin 
        if(item.checkin === state){
          item['display'] = true;
        }else{
          item['display'] = false;
        }
        if(state === undefined) item['display'] = 'all';
      })
      //if(state === undefined) this.newList = this.passengersList;
      
      console.log(this.passengersList);
      // no hace falta lanzar el evento funciona igual, ahora lo pongo por la variable show
      this.filter.emit(this.passengersList)
    }

    addPassenger(){
      this.add.emit(true);
    }
      
}