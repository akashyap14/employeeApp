import { Component } from '@angular/core';
import {NavigationStart,NavigationCancel,NavigationEnd,NavigationError,Router,Event} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmpProject';
  showLoadingIndicator = true;
  constructor(private _router : Router){
    this._router.events.subscribe( (eventData : Event)=> {
      if(eventData instanceof NavigationStart){
        this.showLoadingIndicator =true;
      }
      if(eventData instanceof NavigationEnd ||
         eventData instanceof NavigationCancel ||
         eventData instanceof NavigationError){
        this.showLoadingIndicator =false;
      }
    })

  }

}
