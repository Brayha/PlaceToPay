import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
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
