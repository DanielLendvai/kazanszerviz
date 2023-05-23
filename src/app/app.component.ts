import { trigger, transition, style, animate } from '@angular/animations';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslationService } from './services/translation.service';
import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        style({ opacity: '0.2' }),
        animate('.3s', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  @ViewChild('scrollContainer', { static: true, read: ElementRef })
  scrollContainer!: ElementRef;

  title = 'kazanszerviz';

  activeComponent!: string;
  componentColorMap: { [key: string]: string } = {
    '/home': 'white',
    '/services': '#e4e4e7',
    '/contact': '#f3f4f6',
    '/aboutus': '#d4d4d4',
  };

  constructor(
    private router: Router,
    private translationService: TranslationService,
    private scrollDispatcher: ScrollDispatcher
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeComponent = event.urlAfterRedirects;
      }
    });
  }

  /*   ngAfterViewInit() {
    const divElement =
      this.scrollContainer.nativeElement.querySelector('footer');
    this.scrollDispatcher.scrolled().subscribe(() => {
      if (this.isElementInView(divElement)) {
         console.log('in'); 
      } else {
         console.log('out'); 
      }
    });
  } */
  /*   private isElementInView(element: HTMLElement): boolean {
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight &&
      rect.right <= windowWidth
    );
  } */

  ngOnInit() {
    this.translationService.init();
    console.log('https://linkedin.com/in/daniellendvai');
  }
  changeLanguage(lang: string) {
    this.translationService.setLanguage(lang);
  }
  getAnimationState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
