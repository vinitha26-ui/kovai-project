import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigationItems: any[] = [];
  name: string;

  constructor() {
    this.name = 'Vinitha R';
    this.navigationItems = [
      {
        description: 'Home',
        link: '/home'
      },
      {
        description: 'Portfolio',
        link: '/portfolio'
      }
    ]
  }

  ngOnInit(): void {
  }

}
