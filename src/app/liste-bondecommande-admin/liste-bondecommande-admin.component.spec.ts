import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBondecommandeAdminComponent } from './liste-bondecommande-admin.component';

describe('ListeBondecommandeAdminComponent', () => {
  let component: ListeBondecommandeAdminComponent;
  let fixture: ComponentFixture<ListeBondecommandeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBondecommandeAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBondecommandeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
