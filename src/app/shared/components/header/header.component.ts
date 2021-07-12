import { Component, Input, OnInit } from '@angular/core';
import { menuInterface } from '../../interfaces/menus.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menu: menuInterface;

  constructor() { }

  ngOnInit() {
  }

}
