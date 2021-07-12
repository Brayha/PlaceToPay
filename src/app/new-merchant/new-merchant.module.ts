import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMerchantPageRoutingModule } from './new-merchant-routing.module';

import { NewMerchantPage } from './new-merchant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMerchantPageRoutingModule
  ],
  declarations: [NewMerchantPage]
})
export class NewMerchantPageModule {}
