import { Component, Input, OnInit } from '@angular/core';
import { breadcumbsInterface } from '../../interfaces/breadcumbs.interface';

@Component({
  selector: 'app-breadcumbs',
  templateUrl: './breadcumbs.component.html',
  styleUrls: ['./breadcumbs.component.scss']
})
export class BreadcumbsComponent implements OnInit {
  @Input() breadcums: breadcumbsInterface[];

  constructor() { }

  ngOnInit() {
  }

}
