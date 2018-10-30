import { Component, OnInit, Input } from '@angular/core';
import {Passengers} from '../passenger'

@Component({
  selector: 'app-passenger-checked',
  templateUrl: './passenger-checked.component.html',
  styleUrls: ['./passenger-checked.component.scss']
})
export class PassengerCheckedComponent implements OnInit {

  @Input() passengers: Passengers[];

  constructor() { }

  ngOnInit() {
  }

}
