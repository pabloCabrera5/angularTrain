import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Passengers} from '../../../passenger';
import {Baggage} from '../../models/baggage.interface';
import { PassengerAddComponent } from '../passenger-add/passenger-add.component';
import { FormArray, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    templateUrl: 'passenger-form.component.html' 
})

export class PassengerFormComponent{
    @Input()
    detail: Passengers;
    @Output()
    update: EventEmitter<Passengers> = new EventEmitter<Passengers>();
    @Output()
    remove: EventEmitter<Passengers> = new EventEmitter<Passengers>();
    @Output()
    add: EventEmitter<Passengers> = new EventEmitter<Passengers>();
    mostrarAddForm = false;

    active: boolean = true;

    baggage: Baggage[] = [{
        key:'none',
        value: 'No baggage'
    },{
        key:'hand',
        value: 'Hand baggage'
    },{
        key:'hold',
        value: 'Hold baggage'
    },{
        key:'hand-hold',
        value: 'Hand and hold baggage'
    },{
        key:'all',
        value: 'ALL IN'
    }]

    //function to check if passenger haved checkin and date of checkin
    toggleCheckin(checkin : boolean){
        if(checkin && !this.detail.checkinDate){
            this.detail.checkinDate = Date.now();
        }
    }

    //function to emit the event to update a passenger
    handleSubmit(passenger: Passengers, isValid: boolean){
        if(isValid){
            this.update.emit(passenger)
        }
    }
    //function to emit the event to remove a passenger
    removePassenger(){
        this.remove.emit(this.detail)
    }
    //function to emit the event to remove a passenger
    handleAdd(passenger){
        this.add.emit(passenger)
    }
    //para mostar el formulario 
    showFormAdd(){
        if(this.mostrarAddForm){
            this.mostrarAddForm = false ;
        }else{
            this.mostrarAddForm = true ;
        }
    }
    
    itemIdentity(index, item){
        console.log(item, index)
    }
}