import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-basic-two',
  templateUrl: './basic-two.component.html',
  styleUrls: ['./basic-two.component.scss']
})
export class BasicTwoComponent implements OnInit {
  @Output() clickBtnPrev: EventEmitter<void> = new EventEmitter();
  @Output() clickBtnNext: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickBtnPrev() {
    this.clickBtnPrev.emit();
  }

  onClickBtnNext() {
    this.clickBtnNext.emit();
  }

}
