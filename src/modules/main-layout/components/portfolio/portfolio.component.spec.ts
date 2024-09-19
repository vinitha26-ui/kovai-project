import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioComponent ],
      imports:[HttpClientModule],
      providers: [
        { provide: Router, useValue: router},
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open the panel on click of this function', () => {
    const index =0;
    component.onExpand(index);
     expect(index).toEqual(0);
 
 });
 it('should call on click of moveToSkills function', () => {
  component.moveToHirePage();
  expect(router.navigate).toHaveBeenCalledWith(['portfolio/hire']);
});
 afterEach(() => {
  fixture.destroy();
});
});
