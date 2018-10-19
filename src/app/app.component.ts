import { Component } from '@angular/core';

import { routerTransition } from './app-routing-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [ routerTransition ]
})
export class AppComponent {
  title = 'app';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }


}
