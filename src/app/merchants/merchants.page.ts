import { Component, OnInit } from '@angular/core';

//new merchants
import { ModalController } from '@ionic/angular';
import { NewMerchantPage } from '../new-merchant/new-merchant.page';

//list merchants
import { listMerchantsInterface } from '../shared/interfaces/list.merchants.interface';
import { MERCHANTS } from '../merchants/constants/list-merchants';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.page.html',
  styleUrls: ['./merchants.page.scss'],
})
export class MerchantsPage implements OnInit {
  public dataMerchants: listMerchantsInterface[] = MERCHANTS;

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
