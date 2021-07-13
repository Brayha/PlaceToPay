import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss']
})
export class CommercialComponent implements OnInit {
  @Output() clickBtnPrev: EventEmitter<void> = new EventEmitter();

  constructor(
    private router: Router,
    public toastController: ToastController,
    public modalController: ModalController) { }

  ngOnInit() {
  }

  async alert() {
    this.router.navigateByUrl("/detail-merchant");
    const toast = await this.toastController.create({
      message: 'Merchant create',
      duration: 2000,
      mode: 'ios',
      color: 'success',
      cssClass: 'toast-alert',
    });
    toast.present();
  }

  async save() {
    this.router.navigateByUrl("/detail-merchant");
    await this.modalController.dismiss();
    this.alert();
  }


  onClickBtnPrev() {
    this.clickBtnPrev.emit();
  }

}
