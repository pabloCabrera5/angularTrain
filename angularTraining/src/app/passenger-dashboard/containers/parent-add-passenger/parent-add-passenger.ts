
import {Component, Input, Output} from '@angular/core';
import {PassengerDashboardService} from '../../passenger-dashboard.service';
import {Router} from '@angular/router';

@Component({
    selector: 'parent-add',
    templateUrl: 'parent-add-passenger.html'
})

export class ParentAddPassenger {
    active: boolean = true;

    constructor(private passengerService: PassengerDashboardService,
        private router: Router) {}

    //function to add a passenger
    handleAdd(event){
      console.log(event)
      this.passengerService.addPassenger(event)
        .then((data) => {
            console.log("Pasajero Añadido")
            alert('Pasajero: ' + data.fullname + ' añadido' + '✓');
            location.reload();
            this.goBack();
        })
        .catch(error => this.handleError(error))
    }

    goBack(){
        console.log('dentro back')
        this.router.navigate(['/passengers']);
    }

    handleError(error){
        console.log(error);
    }

}