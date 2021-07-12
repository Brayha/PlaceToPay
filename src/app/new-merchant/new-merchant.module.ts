import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMerchantPageRoutingModule } from './new-merchant-routing.module';

import { NewMerchantPage } from './new-merchant.page';
import { SharedModule } from '../shared/shared.module';
import { BasicOneComponent } from './components/basic-one/basic-one.component';
import { BasicTwoComponent } from './components/basic-two/basic-two.component';
import { OperationComponent } from './components/operation/operation.component';
import { CommercialComponent } from './components/commercial/commercial.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NewMerchantPageRoutingModule
  ],
  declarations: [
    NewMerchantPage,
    BasicOneComponent,
    BasicTwoComponent,
    OperationComponent,
    CommercialComponent
  ]
})
export class NewMerchantPageModule {}
