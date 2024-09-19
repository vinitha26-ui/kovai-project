import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports:[RouterTestingModule,RouterModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open the url in a new tab when the url starts with http ', () => {
    let windowSpy = spyOn(window, 'open').and.callThrough();
    let httpUrlMock = 'https://www.mockurl.com';
    component.moveToUrl(httpUrlMock);
    expect(windowSpy).toHaveBeenCalledWith(httpUrlMock, '_blank');
});
});
