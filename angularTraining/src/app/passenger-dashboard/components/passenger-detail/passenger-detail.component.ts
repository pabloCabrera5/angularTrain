import {Component,Input, Output,EventEmitter} from '@angular/core';

import {Passengers} from '../../../passenger';

@Component({
    selector:'passenger-detail',
    templateUrl: 'passenger-detail.component.html',
    styleUrls: ['passenger-detail.component.scss']
})
export class PassengerDetailComponent {
    constructor() {}
    editting: boolean = false;
    display: boolean;
    flags = [
        'angola',
        'american-samoa',
        'argentina',
        'armenia',
        'australia',
        'spain',
        'france',
        'bahamas',
        'brazil',
        'cameroon',
        'croatia',
        'dominican-republic',
        'greenland',
        'guinea',
        'hawaii',
        'iceland',
        'jamaica'
    ]
    @Input()
    pasajero: Passengers;
    @Input()
    show: boolean;

    @Output()
    remove: EventEmitter<Passengers> = new EventEmitter();
    @Output()
    edit: EventEmitter<Passengers> = new EventEmitter();
    @Output()
    select: EventEmitter<Passengers> = new EventEmitter();
    @Output()
    select2: EventEmitter<Passengers> = new EventEmitter();

    onRemove(){
        this.remove.emit(this.pasajero);
    }

    onNameChange(value: string){
        this.pasajero.fullname = value;
    }

    toggleEdit(){
        if(this.editting){
            // esto es para que no se me guarde en la BD con el atributo display que siempre estara a true
            //(pq se está mostrando dicho pasajero en esa vista )
            //por lo que nada mas iniciar la pagina saldria ese pasajero
            let status = this.pasajero['display'];
            delete this.pasajero['display'];
            this.edit.emit(this.pasajero);
            this.pasajero['display'] = status;
        }
        this.editting = !this.editting;
    }

    ckeckPassenger(pasajero, state){
        if(state){
            //if(pasajero.checkin != true) {
                pasajero.checkin = true;
                //para hacer que desaparezca de la lista de no-checkin o checkin dsp de 1seg
                // verificamos que el estado sea diferente de all para no quitarlo de la lista que mostramos con todos los pasajeros
                setTimeout(() => {
                    if(pasajero.display != 'all') pasajero.display = false;
                }, 1000);
                //sino tiene nacionalidad le ponemos una random, idem para le fecha de checkin
                pasajero.nationality = pasajero.nationality ? pasajero.nationality : this.flags[Math.floor(Math.random()*17)];
                pasajero.checkinDate = pasajero.checkinDate ? pasajero.checkinDate : Math.floor(Math.random()*1111742000000);
            //}
        }else{
            //if(pasajero.checkin != false){
                pasajero.checkin = false;
                setTimeout(() => {
                    if(pasajero.display != 'all') pasajero.display = false;
                }, 1000);
                pasajero.checkinDate = null;
                //podemos guardar una estado anterior para que si el pasaero viene de estar checkin, 
                //lo pasamos a checkout y no tenia bandera, no se la añadimos
            //}
        }
        //this.edit.emit(pasajero) // pq se actualiza solo ?
    }

    //cuando seleccionamos un pasajero, emitimos un evento con ese pasajero
    onSelect(){
        this.select.emit(this.pasajero);
    }
    onSelect2(){
        this.select2.emit(this.pasajero);
    }
}