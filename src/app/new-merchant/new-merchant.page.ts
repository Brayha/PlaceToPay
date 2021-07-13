import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-new-merchant',
  templateUrl: './new-merchant.page.html',
  styleUrls: ['./new-merchant.page.scss'],
})
export class NewMerchantPage implements OnInit {
	@ViewChild(IonSlides, { static: false }) slides: IonSlides;
  
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

  swipeNext() {
    this.slides.slideNext();
  }

  swipePrev() {
    this.slides.slidePrev();
  }

}
