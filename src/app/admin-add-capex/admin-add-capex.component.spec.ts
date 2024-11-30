import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCapexComponent } from './admin-add-capex.component';

describe('AdminAddCapexComponent', () => {
  let component: AdminAddCapexComponent;
  let fixture: ComponentFixture<AdminAddCapexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddCapexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddCapexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
