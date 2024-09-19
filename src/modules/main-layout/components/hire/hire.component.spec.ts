import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireComponent } from './hire.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('HireComponent', () => {
  let component: HireComponent;
  let fixture: ComponentFixture<HireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireComponent ],
      imports:[ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should call on click of send function", () => {
    spyOn(window, "alert");
    component.send();
    expect(window.alert).toHaveBeenCalledWith("All details submitted successfully");
 }); 
  afterEach(() => {
    fixture.destroy();
  });
});
