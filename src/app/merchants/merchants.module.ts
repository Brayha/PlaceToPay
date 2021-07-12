import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantsPageRoutingModule } from './merchants-routing.module';

import { MerchantsPage } from './merchants.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MerchantsPageRoutingModule
  ],
  declarations: [MerchantsPage]
})
export class MerchantsPageModule {}
