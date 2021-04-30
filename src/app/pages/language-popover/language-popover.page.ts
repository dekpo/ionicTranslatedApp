import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-popover',
  templateUrl: './language-popover.page.html',
  styleUrls: ['./language-popover.page.scss'],
})
export class LanguagePopoverPage implements OnInit {
  languages = [];
  selected = '';

  constructor(private translate: TranslateService,
    private languageService: LanguageService,
    private popoverCtrl: PopoverController) { }

  async ngOnInit() {
    this.languages = this.languageService.getLanguages();
    this.selected = await this.languageService.getCurrentLanguage();;
  }

  select(lng) {
    this.languageService.setLanguage(lng);
    this.popoverCtrl.dismiss();
  }


}
