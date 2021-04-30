import { Component } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from '../pages/language-popover/language-popover.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  params = {
    name: 'Dekpo'
  }

  constructor(
    private translate: TranslateService,
    private popoverCtrl: PopoverController,
    private alertCtrl: AlertController
    ) {}

    async showAlert() {
      const alert = await this.alertCtrl.create({
        header: this.translate.instant('ALERT.header'),
        message: this.translate.instant('ALERT.msg'),
        buttons: ['OK']
      });
      alert.present();
    }
  
    async openLanguagePopover(ev) {
      const popover = await this.popoverCtrl.create({
        component: LanguagePopoverPage,
        event: ev
      });
      await popover.present();
    }

}
