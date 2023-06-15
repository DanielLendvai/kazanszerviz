import {
  Component,
  OnInit,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isScrolledToSpecificPoint = false;
  scrollFlags: { [key: string]: boolean } = {
    element1: false,
    element2: false,
    element3: false,
    element4: false,
    element5: false,
  };
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  navigateToSection(fragment: string): void {
    this.router.navigate(['/services'], { fragment: fragment });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;

    // Adjust the element IDs and offset values as needed
    this.checkAndToggleClass('element1', 100, scrollPosition);
    this.checkAndToggleClass('element2', 100, scrollPosition);
    this.checkAndToggleClass('element3', 100, scrollPosition);
    this.checkAndToggleClass('element4', 100, scrollPosition);
    this.checkAndToggleClass('element5', 100, scrollPosition);
    this.checkAndToggleClass('element6', 200, scrollPosition);
  }
  private checkAndToggleClass(
    elementId: string,
    offset: number,
    scrollPosition: number
  ) {
    const element = this.el.nativeElement.querySelector(`#${elementId}`);
    const elementOffsetTop = element.offsetTop;

    if (scrollPosition + offset >= elementOffsetTop) {
      // Include the offset in the comparison
      this.renderer.addClass(element, 'my-class');
      this.scrollFlags[elementId] = true;
    } else {
      this.renderer.removeClass(element, 'my-class');
      this.scrollFlags[elementId] = false;
    }
  }

  ngOnInit(): void {
    const cardsTexts: string[] = [
      'Gázkészülék javítás',
      'Gázkészülék karbantartás',
      'Gázkészülék csere',
      'Üzembehelyezés',
      'Fűtesrendszer átmosás',
      'Ultrahangos hőcserélő tisztítás'
    ];
    const cards: NodeListOf<Element> = document.querySelectorAll('.card');

    cards.forEach((card: Element, index: number) => {
      card.setAttribute('data-value', cardsTexts[index]);
    });
  }
}
