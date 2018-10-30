import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'

import {PassengerCheckedComponent} from './passenger-checked/passenger-checked.component'

const routes: Routes = [
  {path: 'checkin', component: PassengerCheckedComponent}
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
