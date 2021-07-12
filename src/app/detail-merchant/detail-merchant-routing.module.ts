import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMerchantPage } from './detail-merchant.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMerchantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMerchantPageRoutingModule {}
