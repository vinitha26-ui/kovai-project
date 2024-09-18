import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projectDetails: any[] = [];
  selectedCategory: Number = 0;
  constructor() {
    this.projectDetails = [
      {
        heading: 'IT Analyst',
        subHeading: 'StandardLife Insurance - Adviser Portal',
        roleDescription: [
          {
            roles: 'Spearheaded a team of 4 in developing an Adviser portal using Angular, HTML5, CSS3 and TypeScript. This portal is used by the advisers to carry out functions - viewing their policy details, client details, fund transfer and much more. Collaborated closely with UX teams to integrate human-factor principles into the application design.'
          },
          {
            roles: 'Collaborated closely with UX teams to integrate human-factor principles into the application design.'
          },
          {
            roles: 'Increased application security by successfully implementing CSRF JWT Token and Multi-Factor Authentication processes.'
          },
          {
            roles: 'Coordinated with back-end developers to integrate RESTful APIs, improving the scalability of the client digital infrastructure.'
          },
          {
            roles: 'Ensured operational excellence in BAU Activities by conducting health checks and analyzing incidents for Adviser Dash Application.'
          }
        ]
      },
      {
        heading: 'System Engineer',
        subHeading: 'StandardLife Insurance - Client Analytics',
        roleDescription: [
          {
            roles: 'Developed client analytics application that works to empower employers and trustees to understand their member behaviors and help them increase member engagement by improving the relevancy and timing of their communications based on insight. We have used Angular, HTML5, CSS3 and TypeScript to develop this portal.'
          },
          {
            roles: 'Increased team productivity by implementing'
          }
        ]
      },
      {
        heading: 'Associate System Engineer',
        subHeading: 'Phoenix Life Insurance',
        roleDescription: [
          {
            roles: 'Developed login and registration module in customer portal of Phoenix Life Insurance which allows the users to register and then login to carry out their tasks like checking their policy details and much more. Angular, HTML5, CSS3 and TypeScript were used to develop this portal.'
          },
          {
            roles: 'Optimized front-end performance refining JS and Angular codebases, following best practice standards.'
          },
          {
            roles: 'Focused mostly on debugging and Bug fixing.'
          }
        ]
      }
    ]
  }

  ngOnInit(): void {
  }
  onExpand(index: number) {
    this.selectedCategory = index;
  }

}
