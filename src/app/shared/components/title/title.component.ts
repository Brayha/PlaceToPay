import { Component, Input, OnInit } from '@angular/core';
import { titleInterface } from '../../interfaces/title.interface';
import { AlertController } from '@ionic/angular';

//new merchants
import { ModalController } from '@ionic/angular';
import { NewMerchantPage } from '../../../new-merchant/new-merchant.page';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() data: titleInterface;

  constructor(public modalController: ModalController, public alertController: AlertController) { }

  ngOnInit() {
  }

  async newMerchant() {
    const modal = await this.modalController.create({
      component: NewMerchantPage,
      cssClass: 'new-modal-height',
      mode: "ios"
    });
    return await modal.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Attention',
      message: 'you want to delete <strong> Puma </strong>merchant',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
