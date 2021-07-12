import { Component, OnInit } from '@angular/core';

//header
import { menuInterface } from '../shared/interfaces/menus.interface';
import { MENU } from '../detail-merchant/constants/menu';

//title
import { titleInterface } from '../shared/interfaces/title.interface';
import { TITLE_MERCHANTS, TITLE_CREDIT} from '../detail-merchant/constants/title-merchants';

//Breadcums
import { breadcumbsInterface } from '../shared/interfaces/breadcumbs.interface';
import { BREADCUMBS_MERCHANTS } from './constants/breadcumbs-merchants';

//Data
import { dataDetailInterface } from '../shared/interfaces/data.detail.interface';
import { DATA } from './constants/datail-data';

@Component({
  selector: 'app-detail-merchant',
  templateUrl: './detail-merchant.page.html',
  styleUrls: ['./detail-merchant.page.scss'],
})
export class DetailMerchantPage implements OnInit {
  public menu: menuInterface = MENU;
  public breadcumsMerchants: breadcumbsInterface[] = BREADCUMBS_MERCHANTS;
  public title: titleInterface = TITLE_MERCHANTS;
  public detailSegment: string;
  public info: dataDetailInterface[] = DATA;
  public titleCredit: titleInterface = TITLE_CREDIT;

  constructor() { }

  ngOnInit() {
  }

	ionViewWillEnter() {
    this.detailSegment = 'detail';
	}
}
