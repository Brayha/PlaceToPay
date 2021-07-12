import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listMerchantsInterface } from '../../interfaces/list.merchants.interface';

@Component({
  selector: 'app-list-merchants',
  templateUrl: './list-merchants.component.html',
  styleUrls: ['./list-merchants.component.scss']
})
export class ListMerchantsComponent implements OnInit {
  @Input() merchants: listMerchantsInterface[];

  constructor(
		public router: Router
    ) { }

  ngOnInit() {
  }

	async detailMerchant() {
		this.router.navigateByUrl("/");
	}

}
