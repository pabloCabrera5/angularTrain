import { Component, OnInit } from '@angular/core';

import {Passengers} from '../../../passenger';
import {PassengerDashboardService} from '../../passenger-dashboard.service'

import {Router} from '@angular/router';


@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  title: string;
  numberOne: number;
  numberTwo: number;
  isHappy: boolean = true;
  logo: string = 'assets/logo.svg';
  name: string = 'P';
  passengers: Passengers[];

  selectedPassenger: Passengers;
  mayShow: boolean = true; // para saber si mostrar la lista de pasajeros o no 
  active : boolean = false; // para no mostar el form de add passenger si clikamos en una lista de pasajeros

  newList : Passengers[] = [];

  ngOnInit(){
    this.passengerService.getPassengers()
      .subscribe(
        (data: Passengers[]) => this.passengers = data,
        (error: any) => console.log(error)
      );
  }

  constructor( private router: Router,private passengerService: PassengerDashboardService){
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

  //function for edit a name passenger
  handleEdit(event){
    this.passengerService.updatePassenger(event)
      .then((data: Passengers) => {
        this.passengers = this.passengers.map(( pasajero: Passengers) => {
            if(pasajero.id == event.id){
                pasajero = Object.assign({}, pasajero, event);
            }
            return pasajero;
        })
      })
      .catch((error: any) => this.handleError(error))
    console.log(this.passengers);
  }

  //function for delete a passenger
  handleRemove(event){
    this.passengerService.removePassenger(event)
      .then((data) => {
        this.passengers = this.passengers.filter((pasajero) =>{
            return pasajero.id != event.id;
        })
    })
    .catch((error: any) => this.handleError(error))
    console.log('remove');
  }

  //function to add a passenger
  handleAdd(event){
    console.log(event)
    this.passengerService.addPassenger(event)
      .then((data) => {
        console.log("Pasajero Añadido")
        alert('Pasajero: ' + data.fullname + ' añadido' + '✓');
        location.reload();
      })
      .catch(error => this.handleError(error))
  }

  handleError(error){
    console.log(error);
  }

  //event reciver the passenger list
  filterPassenger(pasajeros){
    console.log('recibo..')
    this.mayShow = true; // variable para saber si mostrar o no la lista de pasajeros
    this.active = false; // para no mostrar el form de add passenger
    console.log(this.active)
    this.passengers = pasajeros; // lista de pasajeros a mostrar
    this.selectedPassenger = null; // quitamos la seleccion de un pasajero
  }

  //function for select a passenger and show her detail
  onSelect(pasajero){
    this.selectedPassenger = pasajero; // asignamos el pasajero que seleccionamos a la variable
    this.mayShow = false; // para no mostrar la lista de pasajeros
    this.active = false; // para no mostrar el form de add passenger
  }

  //when we go back from the passenger info, restore the list
  restore(){
    this.selectedPassenger = null;
    this.mayShow = true;
    //this.active = false; // si queremos ocultar el formulario para añadir un pasajero
  }
  hide(){
    this.mayShow = false;
  }

  handleSelect(passenger: Passengers){
    this.router.navigate(['/passengers', passenger.id]);
  }
  //para cuando ponga el add en otra pagina 
  add(){
    console.log('adddddd')
    this.active = true;
    this.router.navigate(['/passengers/add']);
  }
  goBack(){
    console.log('dentro back')
    this.router.navigate(['/passengers']);
  }

}
