import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondeommandeopexAdminComponent } from './bondeommandeopex-admin.component';

describe('BondeommandeopexAdminComponent', () => {
  let component: BondeommandeopexAdminComponent;
  let fixture: ComponentFixture<BondeommandeopexAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondeommandeopexAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BondeommandeopexAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
