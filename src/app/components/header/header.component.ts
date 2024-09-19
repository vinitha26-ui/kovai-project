import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ContentService } from 'src/modules/main-layout/services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigationItems: any[] = [];
  name: string;

  constructor(private contentService: ContentService,private router: Router) {
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
    this.router.events.subscribe((value:any) => {
      if(value as NavigationStart){
        if(value.url){
        const url : any = value.url ;
        if(!url.includes('hire')){
          window.sessionStorage.removeItem('hirePage');
          this.contentService.setHirePage(false);
        }else {
          window.sessionStorage.setItem('hirePage','true');
          this.contentService.setHirePage(true);
        }
      }
      }
  });
  }
  onNavigationClick() {
    window.sessionStorage.removeItem('hirePage');
    this.contentService.setHirePage(false);
  }


}
