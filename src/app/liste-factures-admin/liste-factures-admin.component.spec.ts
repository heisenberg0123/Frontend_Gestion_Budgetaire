import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFacturesAdminComponent } from './liste-factures-admin.component';

describe('ListeFacturesAdminComponent', () => {
  let component: ListeFacturesAdminComponent;
  let fixture: ComponentFixture<ListeFacturesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFacturesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFacturesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
