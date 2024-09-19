import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { SkillsComponent } from './components/skills/skills.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HireComponent } from './components/hire/hire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";


@NgModule({
  declarations: [
    HomeComponent,
    PortfolioComponent,
    SkillsComponent,
    HireComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class MainLayoutModule { }
