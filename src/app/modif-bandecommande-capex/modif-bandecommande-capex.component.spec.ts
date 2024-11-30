import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifBandecommandeCapexComponent } from './modif-bandecommande-capex.component';

describe('ModifBandecommandeCapexComponent', () => {
  let component: ModifBandecommandeCapexComponent;
  let fixture: ComponentFixture<ModifBandecommandeCapexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifBandecommandeCapexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifBandecommandeCapexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
