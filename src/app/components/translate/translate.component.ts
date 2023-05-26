import { Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';


@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss'],
})
export class TranslateComponent {
  constructor(private translationService: TranslationService) {}
  changeLanguage(lang: string) {
    this.translationService.setLanguage(lang);
    
  }
}
