import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() activeComponent!: string;
  @Input() componentColorMap!: { [key: string]: string };
  
  constructor(private router: Router, private translationService: TranslationService) {}
  changeLanguage(lang: string) {
    this.translationService.setLanguage(lang);
  }

  onClick(route: string) {
    this.router.navigate([route]);
  }
}
