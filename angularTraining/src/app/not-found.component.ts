import {Component} from '@angular/core';

@Component({
    selector: 'passenger-not-found',
    template: `
    <div>
        <p>Sorry, wrong url! :( </p> 
        <a routerLink="/"> Go Home</a><br>
        <a routerLink="/passengers"> Go to the list of passengers</a><br>
        <a routerLink="/passengers/add"> Add a new passengers</a>
    </div>`,
    styles: ['p {font-weight:bold; font-style:italic; font-family: Georgia; font-variant: small-caps}']
})
export class NotFoundComponent{

}