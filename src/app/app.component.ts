import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
/*         style({ position: 'relative' }),
        style({ transform: 'translateY(-100%)' }), */
        style({opacity: "0"}),
        animate('1.5s', style({ /* transform: 'translateY(0)', */ opacity: "1" })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'kazanszerviz';
  getAnimationState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
