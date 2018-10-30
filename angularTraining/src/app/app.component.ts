import { Component } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

import {Passengers} from './passenger'

interface Nav {
  link: string,
  name: string,
  exact: boolean,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: 'passengers',
      name: 'List of Passengers',
      exact: false
    },
    {
      link: '/uyyy',
      name: '404',
      exact: false
    }
  ]
  /*
  title: string;
  numberOne: number;
  numberTwo: number;
  isHappy: boolean = true;
  logo: string = 'assets/logo.svg';
  name: string = 'P';

  newList : Passengers[] = [];
  passengers: Passengers[] = [
    {
      id:1,
      fullname: 'CR',
      checkin: true,
      checkinDate: 1510742000000,
      children: [{name: 'junior', age: 7}],
      nationality: 'canada',
    },
    {
      id:2,
      fullname:"Pepe",
      checkin: false,
    },
    {
      id:3,
      fullname: 'Pepito',
      checkin: true,
      checkinDate:1313742000000,
      children: [{name: 'older' , age: 10}, {name:'grillito', age: 11}],
      nationality: 'norway'
    },
    {
      id:4,
      fullname: 'Pepote',
      checkin: true,
      checkinDate: 1111742000000,
    },
    {
      id:5,
      fullname: 'Pepazo',
      checkin: false,
      nationality: 'new-zealand'
    },
  ]

  constructor(){
    this.title = 'Passengers';
    this.isHappy = true;
    this.numberOne = 1;
    this.numberTwo = 10;
  }

  handleInput(event){
    this.name = event.target.value;
  }
  handleClick(){
    this.name = ' Pepito Grillo'
  }

  passengerList(state){
    this.newList = [];
    this.passengers.forEach((item) => {
      if(item.checkin === state){
        this.newList.push(item);
      }
    })
    if(state === undefined) this.newList = this.passengers;
  }
*/
}
