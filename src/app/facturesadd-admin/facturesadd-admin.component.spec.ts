import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesaddAdminComponent } from './facturesadd-admin.component';

describe('FacturesaddAdminComponent', () => {
  let component: FacturesaddAdminComponent;
  let fixture: ComponentFixture<FacturesaddAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturesaddAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturesaddAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
