import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillSets: any[] = [];
  activeIndex: any = 0;
  constructor() {
    this.skillSets = [
      {
        heading: 'Software',
        skillDetails: [
          {
            srcPath: 'vscode-logo.svg',
            altName: 'vscode',
            skill: 'Visual studio code'
          },
          {
            srcPath: 'github-logo.svg',
            altName: 'github',
            skill: 'Github'
          }
        ]
      },
      {
        heading: 'Technology',
        skillDetails: [
          {
            srcPath: 'angular.svg',
            altName: 'Angular Icon',
            skill: 'Angular'
          }
        ]
      },
      {
        heading: 'Language',
        skillDetails: [
          {
            srcPath: 'typescript-logo.svg',
            altName: 'Typescript Icon',
            skill: 'Typescript'
          }
        ]
      },


    ]
  }

  ngOnInit(): void {
  }

  setActiveIndex(event: any) {
    this.activeIndex = event;
  }

}
