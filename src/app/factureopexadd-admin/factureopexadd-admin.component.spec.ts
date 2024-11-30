import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureopexaddAdminComponent } from './factureopexadd-admin.component';

describe('FactureopexaddAdminComponent', () => {
  let component: FactureopexaddAdminComponent;
  let fixture: ComponentFixture<FactureopexaddAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureopexaddAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureopexaddAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
