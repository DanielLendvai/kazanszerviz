import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {}

  init() {
    this.translate.setDefaultLang('hu');
    this.translate.use('hu');
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

}
