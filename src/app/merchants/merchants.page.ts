import { Component, OnInit } from '@angular/core';

//header
import { menuInterface } from '../shared/interfaces/menus.interface';
import { MENU } from '../merchants/constants/menu';

//title
import { titleInterface } from '../shared/interfaces/title.interface';
import { TITLE_MERCHANTS } from '../merchants/constants/title-merchants';

//Breadcums
import { breadcumbsInterface } from '../shared/interfaces/breadcumbs.interface';
import { BREADCUMBS_MERCHANTS } from '../merchants/constants/breadcumbs-merchants';

//list merchants
import { listMerchantsInterface } from '../shared/interfaces/list.merchants.interface';
import { MERCHANTS } from '../merchants/constants/list-merchants';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.page.html',
  styleUrls: ['./merchants.page.scss'],
})
export class MerchantsPage implements OnInit {
  public menu: menuInterface = MENU;
  public breadcumsMerchants: breadcumbsInterface[] = BREADCUMBS_MERCHANTS;
  public title: titleInterface = TITLE_MERCHANTS;
  public dataMerchants: listMerchantsInterface[] = MERCHANTS;

  constructor() { }

  ngOnInit() {
  }

}
