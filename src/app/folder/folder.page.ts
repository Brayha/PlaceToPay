import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//list merchants
import { listMerchantsInterface } from '../shared/interfaces/list.merchants.interface';
import { MERCHANTS } from './constants/list-merchants';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public dataMerchants: listMerchantsInterface[] = MERCHANTS;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
