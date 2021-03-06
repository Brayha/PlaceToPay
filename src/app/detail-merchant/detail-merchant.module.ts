import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMerchantPageRoutingModule } from './detail-merchant-routing.module';

import { DetailMerchantPage } from './detail-merchant.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DetailMerchantPageRoutingModule
  ],
  declarations: [DetailMerchantPage]
})
export class DetailMerchantPageModule {}
