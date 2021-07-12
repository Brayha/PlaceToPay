import { Component, OnInit } from '@angular/core';

//title
import { titleInterface } from '../shared/interfaces/title.interface';
import { TITLE_MERCHANTS } from '../detail-merchant/constants/title-merchants';

//Breadcums
import { breadcumbsInterface } from '../shared/interfaces/breadcumbs.interface';
import { BREADCUMBS_MERCHANTS } from '../detail-merchant/constants/breadcumbs-merchants';

@Component({
  selector: 'app-detail-merchant',
  templateUrl: './detail-merchant.page.html',
  styleUrls: ['./detail-merchant.page.scss'],
})
export class DetailMerchantPage implements OnInit {
  public breadcumsMerchants: breadcumbsInterface[] = BREADCUMBS_MERCHANTS;
  public title: titleInterface = TITLE_MERCHANTS;

  constructor() { }

  ngOnInit() {
  }

}
