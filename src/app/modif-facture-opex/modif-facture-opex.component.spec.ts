import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifFactureOpexComponent } from './modif-facture-opex.component';

describe('ModifFactureOpexComponent', () => {
  let component: ModifFactureOpexComponent;
  let fixture: ComponentFixture<ModifFactureOpexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifFactureOpexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifFactureOpexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
