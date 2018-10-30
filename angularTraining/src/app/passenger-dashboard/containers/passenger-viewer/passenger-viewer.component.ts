import {Component, OnInit} from '@angular/core';
import {PassengerDashboardService} from '../../passenger-dashboard.service';
import {Passengers} from '../../../passenger';

import {Router, ActivatedRoute} from '@angular/router'
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    templateUrl: 'passenger-viewer.component.html'
})

export class PassengerViewerComponent implements OnInit{
    passenger : Passengers;
    passengers;

    constructor(
        private passengerService: PassengerDashboardService,
        private route : ActivatedRoute, 
        private router: Router
    ){}

    ngOnInit(){
        //usamos switchMap para los tiempos de esperas ya que son llamadas asincronas, si se cambia de parametro, se cancela la ult llamada
        this.route.params
            .switchMap((data: Passengers) => this.passengerService.getPassenger(data.id))
            .subscribe((data: Passengers) => this.passenger = data);
        /*this.passengerService.getPassenger(1)
            .subscribe((data: Passengers) => this.passenger = data);*/
    }

    //function to update the passenger we receive from the child passenger-form
    onUpdatePassenger(passenger: Passengers){
        this.passengerService.updatePassenger(passenger)
            .then((data: Passengers) => {
                this.passenger = Object.assign({}, this.passenger, passenger);
            });
    }

    //function for delete a passenger
    onRemove(event){
        this.passengerService.removePassenger(event)
        .then((data) => {
            this.passenger = null;
            this.goBack()
            })
        .catch((error: any) => this.handleError(error))
        console.log('remove');
    }

    //function to go back with the router
    goBack(){
        this.router.navigate(['/passengers']);
    }

    handleError(error){
        console.log(error);
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

}