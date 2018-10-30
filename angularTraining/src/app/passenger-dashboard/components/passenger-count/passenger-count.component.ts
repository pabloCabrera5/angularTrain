import {Component, Input} from '@angular/core';
import {Passengers} from '../../../passenger';

@Component({
    selector:'passenger-count',
    template: `
    <div>
        Total Passengers: {{ checkedCount() }} / {{items?.length}}
        <br><br>
    </div>
    `
})
export class PassengerCountComponent {

    @Input()
    items: Passengers[];

    constructor() {}

    checkedCount(): number{
        if(!this.items) return;
        return this.items.filter((passenger: Passengers) => passenger.checkin).length;
    }
}