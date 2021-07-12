import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMerchantPageRoutingModule } from './detail-merchant-routing.module';

import { DetailMerchantPage } from './detail-merchant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMerchantPageRoutingModule
  ],
  declarations: [DetailMerchantPage]
})
export class DetailMerchantPageModule {}
