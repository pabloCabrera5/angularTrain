import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Passengers} from '../../../passenger';

@Component({
  selector: 'passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.scss']
})
export class PassengerInfoComponent implements OnInit {

  @Input() pasajero : Passengers;
  @Output() back = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  goBack(){
    this.back.emit();
  }

}
