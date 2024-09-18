import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { SkillsComponent } from './components/skills/skills.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    HomeComponent,
    PortfolioComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatTabsModule
  ]
})
export class MainLayoutModule { }
