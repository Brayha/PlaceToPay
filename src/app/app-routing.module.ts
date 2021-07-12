import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/merchants',
    pathMatch: 'full'
  },
  {
    path: 'new-merchant',
    loadChildren: () => import('./new-merchant/new-merchant.module').then( m => m.NewMerchantPageModule)
  },
  {
    path: 'detail-merchant',
    loadChildren: () => import('./detail-merchant/detail-merchant.module').then( m => m.DetailMerchantPageModule)
  },
  {
    path: 'merchants',
    loadChildren: () => import('./merchants/merchants.module').then( m => m.MerchantsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
