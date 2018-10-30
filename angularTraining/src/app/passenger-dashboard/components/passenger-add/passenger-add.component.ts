import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
//import {PassengerDashboardService} from '../../passenger-dashboard.service';
import {Passengers, Child} from '../../../passenger';

//import * as fs from "fs";


@Component({
  selector: 'passenger-add',
  templateUrl: './passenger-add.component.html',
  styleUrls: ['./passenger-add.component.css']
})
export class PassengerAddComponent implements OnInit {
  @Input() 
  active: boolean; // var q nos pasa el padre para saber si mostrar el formulario o no 
  @Output()
  isActive = new EventEmitter(); // evento q emitimos para actualizar la variable active
  @Output()
  add: EventEmitter<Passengers> = new EventEmitter(); // para navegar a nueva pagina de add
  @Output()
  back: EventEmitter<any> = new EventEmitter(); // para retroceder

  pasajero: Passengers = new Passengers;
  numChildrens: number = 0;
  first = true;
  constructor(/*private passengerService: PassengerDashboardService*/) { }

  img = new Image();
  imgErr: boolean = false;
  
   

  ngOnInit() {
    this.img.onerror = this.notfound;
  }

  notfound(){
    this.imgErr = true;
    //this.pasajero.nationality = 'assets/flags/european-union.svg';
    alert('Sorry, your nationality isnt in our database, default one is used instead.')
  }

  // para mostrar u ocultar el formulario segun que boton cliquemos
  showForm(){
    if(this.active == true){
      this.isActive.emit(false);
    }else{
      this.isActive.emit(true);
    }
    this.pasajero = new Passengers;
  }

  // para comprobar los campos que hay que rellenar 
  validationPassenger(pasajero){
    let valid = true;
    if(this.numChildrens != 0){
      for(let i in pasajero.children){
        if( (!pasajero.children[i].name || pasajero.children[i].name.trim() == "") || 
            !(pasajero.children[i].age) ) {
          valid = false;
        }
      }
    }
    if(!pasajero.fullname || !pasajero.fullname.trim()) valid = false;
    //campo no requerido //if(!pasajero.nationality) valid = false;
    if(pasajero.checkin && !pasajero.checkinDate) valid = false;
    if(!pasajero.checkin) pasajero.checkin = false;
    //if the nationality flag doesn't exist we set a default one 
    /*if(this.imgErr){
      this.pasajero.nationality = 'european-union';
      this.imgErr = false;
    }*/
    if(!valid) alert('Falta rellenar uno de los campos ' + '✖');
    return valid;
  }

  // function que llama a añadir un pasajero
  addPassenger(pasajero: Passengers) {
    console.log()
    //comprobamos que todo este OK
    /*if(pasajero.nationality){
      this.img.src = "assets/flags/"+pasajero.nationality+".svg";
    }*/
    if(this.validationPassenger(pasajero)){
      // para transformar la fecha a milisegundos 
      if(this.pasajero.checkinDate) this.pasajero.checkinDate = new Date (this.pasajero.checkinDate).getTime();
      //this.active = true;
      console.log('añadiendo...')
      console.log(pasajero);
      this.add.emit(pasajero);//emitimos el evento para que sea el padre quien llame al servicio para añadir
      /*
      this.passengerService.addPassenger(pasajero)
        .then((data) => {
          //console.log(data);
          console.log("Pasajero Añadido")
          alert('Pasajero: ' + pasajero.fullname + ' añadido');
          //this.active = false;
        })
        .catch((error) => console.log(error));*/
    }
  }

  /*showDate(elem){
    document.getElementById("date1").style.display="block";
    if(elem === true) document.getElementById("date1").style.display="none";
  }*/


  // funcion para ir poniendo o quitando los campos de los hijos
  setNumChild(value){
    // para iniciar solamente la primera vez el array de hijos
    if(this.first){
      this.pasajero.children = new Array <Child> ();
      this.first = false;
    }
    // cogemos la diferencia entre los hijos que tenemos y los que añadimos/quitamos
    let dif = value - this.numChildrens;
    // si hay que añadir hijos
    if(this.numChildrens < value){
      // esto es por si vaciamos toda la lista dsp de inicializarla dira que no existe(undefined), por lo que habra que volver a inicializarla
      if(!this.pasajero.children) this.pasajero.children = new Array <Child> ();
      for(let i=0; i<dif; i++){
        this.pasajero.children.push(new Child)
      }
      // si hay que eliminar hijos
    }else if( this.numChildrens > value){
      for(let i=0; i>dif; i--){
        this.pasajero.children.pop()
      }
      // si no tenemos hijos eliminamos el campo ( para estandarizarlo )
      if(this.pasajero.children.length == 0) {
        delete this.pasajero.children;
      }
    }
    this.numChildrens = value;
    console.log(this.pasajero.children)
    console.log(value);
  }

  goBack(){
    this.back.emit(true);
  }

}
