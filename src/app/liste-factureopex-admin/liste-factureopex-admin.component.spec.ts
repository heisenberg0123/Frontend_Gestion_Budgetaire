import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFactureopexAdminComponent } from './liste-factureopex-admin.component';

describe('ListeFactureopexAdminComponent', () => {
  let component: ListeFactureopexAdminComponent;
  let fixture: ComponentFixture<ListeFactureopexAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFactureopexAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFactureopexAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
