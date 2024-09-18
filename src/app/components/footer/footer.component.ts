import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  navigationItems: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.navigationItems = [
      {
        srcPath: 'linkedin.svg',
        altName: 'Linkedin',
        link: 'https://www.linkedin.com/in/vinitha-raghuraman-8503101b6/'
      }
    ];
  }
  moveToUrl(link: any) {
    window.open(link, '_blank');
  }

}
