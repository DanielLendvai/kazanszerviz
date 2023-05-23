import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/services/translation.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isSticky: boolean = false;
  
  @Input() activeComponent!: string;
  @Input() componentColorMap!: { [key: string]: string };
  
  constructor(private router: Router, private translationService: TranslationService) {}

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const navbarElement = document.querySelector('nav');

    if (navbarElement) {
      const originalPosition = navbarElement.getBoundingClientRect().top;
      this.isSticky = scrollPosition > originalPosition;
    }
  }

  isNavbarSticky() {
    return this.isSticky;
  }
  
  changeLanguage(lang: string) {
    this.translationService.setLanguage(lang);
  }

  onClick(route: string) {
    this.router.navigate([route]);
  }
}
