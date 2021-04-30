import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { TranslateService } from '@ngx-translate/core';

const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selected = '';

  constructor(private translate: TranslateService, private storage: Storage) {
    this.storage.create();
   }

  setInitialAppLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);

    this.storage.get(LNG_KEY).then(val => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      }
    });
  }

  getLanguages() {
    return [
      { text: 'Français', value: 'fr', img: 'assets/flags/fr.png' },
      { text: 'Español', value: 'es', img: 'assets/flags/es.png' },
      { text: 'English', value: 'en', img: 'assets/flags/en.png' }
    ];
  }

  setLanguage(lng) {
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }

  async getCurrentLanguage(){
    let language = this.translate.getBrowserLang();
    await this.storage.get(LNG_KEY).then(val => {
      if (val) {
        language = val;
      }
    });
    return language;
  }
}
