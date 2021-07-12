import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { dataDetailInterface } from '../../interfaces/data.detail.interface';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.scss']
})
export class DataDetailComponent implements OnInit {
  @Input() dataDetail: dataDetailInterface;

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Item copiado',
      duration: 2000,
      mode:"ios",
      color: 'success'
    });
    toast.present();
  }

}
