import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommationAdminComponent } from './consommation-admin.component';

describe('ConsommationAdminComponent', () => {
  let component: ConsommationAdminComponent;
  let fixture: ComponentFixture<ConsommationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsommationAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsommationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
