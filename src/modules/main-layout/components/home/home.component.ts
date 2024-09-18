import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contentName: string;
  pageContent: any;
  loader = true;

  constructor(private contentService: ContentService, private router: Router) {
    this.contentName = 'homeComponent';
  }

  ngOnInit(): void {

    this.contentService.contentService(this.contentName).subscribe(content => {
      this.pageContent = content;
      this.loader = false;
    },
      error => {
        this.pageContent = '';
        this.loader = false;
      })
  }

  moveToSkills() {
    this.router.navigate(['/skills']);
  }

}
