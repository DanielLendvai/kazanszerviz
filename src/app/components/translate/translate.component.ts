import { Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss'],
})
export class TranslateComponent {
  currentLanguage!: string; // Variable to hold the current language

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.currentLanguage = this.translationService.getCurrentLanguage();
  }

  changeLanguage(lang: string) {
    this.translationService.setLanguage(lang);
    this.currentLanguage = lang;
  }
}
