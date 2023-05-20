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
  @ViewChild('scrollContainer', { static: true, read: ElementRef })
  scrollContainer!: ElementRef;

  title = 'kazanszerviz';

  activeComponent!: string;
  componentColorMap: { [key: string]: string } = {
    '/home': 'white',
    '/services': '#575757',
    '/contact': '#bdbdbd',
  };
  componentGradientMap: { [key: string]: string } = {
    '/home': 'linear-gradient(to right, #b1b2bf61, #3ABFC6)',
    '/services': 'linear-gradient(to right, #3ABFC6, #64B5F6)',
    '/contact': 'linear-gradient(to right, #64B5F6, #b1b2bf61)',
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

  ngAfterViewInit() {
    const divElement =
      this.scrollContainer.nativeElement.querySelector('footer');
    this.scrollDispatcher.scrolled().subscribe(() => {
      if (this.isElementInView(divElement)) {
        /*         divElement.classList.add('bg-flameColor'); */
        console.log('in');
      } else {
        /*         divElement.classList.remove('bg-flameColor'); */
        console.log('out');
      }
    });
  }
  private isElementInView(element: HTMLElement): boolean {
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
  }

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
