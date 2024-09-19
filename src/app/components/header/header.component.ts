import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/modules/main-layout/services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigationItems: any[] = [];
  name: string;

  constructor(private contentService: ContentService) {
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
  onNavigationClick() {
    window.sessionStorage.removeItem('hirePage');
    this.contentService.setHirePage(false);
  }


}
