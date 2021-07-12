import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basic-one',
  templateUrl: './basic-one.component.html',
  styleUrls: ['./basic-one.component.scss']
})
export class BasicOneComponent implements OnInit {
  @Output() clickBtn: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goNextSlider() {
    this.clickBtn.emit();
  }

}
