import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
//For Promises
import 'rxjs/add/operator/toPromise';
//For Observable
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

import {environment} from '../../environments/environment';

import {Passengers} from '../passenger';
import { PassengerActionsComponent } from './components/passenger-actions/passenger-actions.component';
import { resetFakeAsyncZone } from '@angular/core/testing';

const PASSENGER_API : string = `${environment.backend}/passengers`;

@Injectable()
export class PassengerDashboardService {

  constructor(private http : Http) { }

  //function to get the list of passenger in the database
  getPassengers(): Observable<Passengers[]> {
    let header = new Headers({
      'Content-type' : 'application/json',
    });
    let options = new RequestOptions({
      headers: header
    })
    return this.http.get(PASSENGER_API,options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json))
  }

  //function to get only one passenger
  getPassenger(id: number): Observable<Passengers>{
    return this.http.get(`${PASSENGER_API}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json));
  }

  //function to update a passenger in the database
  updatePassenger(passenger: Passengers): Promise<Passengers>{
    return this.http.put(`${PASSENGER_API}/${passenger.id}`,passenger)
      .toPromise()
      .then((response: Response) => response.json())
      .catch((error) => this.handleError(error))
  }

  //function to delete a passenger in the database
  removePassenger(passenger: Passengers): Promise<Passengers>{
    return this.http.delete(`${PASSENGER_API}/${passenger.id}`)
      .toPromise()
      .then((response: Response) => response.json())
      .catch((error) => this.handleError(error))
  }

  //function to add a passenger
  addPassenger(passenger: Passengers): Promise<Passengers>{
    console.log(passenger)
    return this.http.post(PASSENGER_API, passenger)
      .toPromise()
      .then((response: Response) => response.json())
      .catch((error) => this.handleError(error))
  }

  handleError(error){
    console.log(error);
  }

}
