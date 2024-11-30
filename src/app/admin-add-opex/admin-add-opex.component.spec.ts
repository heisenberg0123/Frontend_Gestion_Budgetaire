import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddOpexComponent } from './admin-add-opex.component';

describe('AdminAddOpexComponent', () => {
  let component: AdminAddOpexComponent;
  let fixture: ComponentFixture<AdminAddOpexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddOpexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddOpexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
