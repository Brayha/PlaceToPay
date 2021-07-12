import { Component, OnInit } from '@angular/core';

//list merchants
import { listMerchantsInterface } from '../shared/interfaces/list.merchants.interface';
import { MERCHANTS } from '../merchants/constants/list-merchants';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.page.html',
  styleUrls: ['./merchants.page.scss'],
})
export class MerchantsPage implements OnInit {
  public dataMerchants: listMerchantsInterface[] = MERCHANTS;

  constructor() { }

  ngOnInit() {
  }

}
