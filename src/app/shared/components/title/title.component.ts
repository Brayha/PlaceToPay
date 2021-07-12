import { Component, Input, OnInit } from '@angular/core';
import { titleInterface } from '../../interfaces/title.interface';

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

  constructor(public modalController: ModalController) { }

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

}
