import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-merchant',
  templateUrl: './new-merchant.page.html',
  styleUrls: ['./new-merchant.page.scss'],
})
export class NewMerchantPage implements OnInit {
  public slideOpts = {
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
