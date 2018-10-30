import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
//import { PassengerCheckedComponent } from './passenger-checked/passenger-checked.component';
//import { AppRoutingModule } from './/app-routing.module';

import {PassengerDashboardModule} from './passenger-dashboard/passenger-dashboard.module';
import {HomeComponent} from './home.component'
import {NotFoundComponent} from './not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  //{path: 'passenger', component: PassengerDashboardModule, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    //PassengerCheckedComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    //AppRoutingModule,
    // useHash es para poner # en la url
    RouterModule.forRoot(routes, {useHash: true}),
    PassengerDashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
