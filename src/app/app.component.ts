import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        /*         style({ position: 'relative' }),
        style({ transform: 'translateY(-100%)' }), */
        style({ opacity: '0.5' }),
        animate(
          '0.5s',
          style({ /* transform: 'translateY(0)', */ opacity: '1' })
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'kazanszerviz';
  constructor(private translationService: TranslationService) {}
  ngOnInit() {
    this.translationService.init();
  }
  changeLanguage(lang: string) {
    this.translationService.setLanguage(lang);
  }
  getAnimationState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
