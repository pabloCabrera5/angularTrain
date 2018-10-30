import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

//container
import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.component'
import { PassengerCheckedComponent } from '../passenger-checked/passenger-checked.component';
import {PassengerViewerComponent} from './containers/passenger-viewer/passenger-viewer.component';
import {ParentAddPassenger} from './containers/parent-add-passenger/parent-add-passenger';
//dumbs
import {PassengerActionsComponent} from './components/passenger-actions/passenger-actions.component';
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';
import { PassengerAddComponent } from './components/passenger-add/passenger-add.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
//service
import {PassengerDashboardService} from './passenger-dashboard.service';

const routes: Routes = [
  {
    path: 'passengers',
    children:[
      { path: '', component: PassengerDashboardComponent },
      { path: 'add', component: ParentAddPassenger, pathMatch: 'full' },
      { path: ':id', component: PassengerViewerComponent},
    ]
  }
]

@NgModule({
  declarations: [
    //Container
    PassengerDashboardComponent,
    PassengerViewerComponent,
    ParentAddPassenger,
    //Creado Mio
    PassengerCheckedComponent,
    //Components Dumb
    PassengerActionsComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerInfoComponent,
    PassengerAddComponent,
    PassengerFormComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PassengerDashboardService
  ],
  bootstrap: [],
  exports: [
    //ya no hac falta exportar nada pq usamos el router y navegamos 
    //PassengerDashboardComponent,
    //PassengerViewerComponent,
  ]
})
export class PassengerDashboardModule { }
