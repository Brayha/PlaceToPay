import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Merchants', url: '/merchants', icon: 'storefront' },
    { title: 'Transactions', url: '/Outbox', icon: 'cash' },
    { title: 'Users', url: '/Favorites', icon: 'people' },
    { title: 'Sellers', url: '/Archived', icon: 'bar-chart' },
    { title: 'Shop', url: '/Trash', icon: 'cart' },
    { title: 'Holidays', url: '/Spam', icon: 'calendar' },
    { title: 'Branches', url: '/Spam', icon: 'git-branch' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
