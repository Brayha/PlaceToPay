import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMerchantPage } from './new-merchant.page';

const routes: Routes = [
  {
    path: '',
    component: NewMerchantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMerchantPageRoutingModule {}
