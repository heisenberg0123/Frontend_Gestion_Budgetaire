import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifFactureCpexComponent } from './modif-facture-cpex.component';

describe('ModifFactureCpexComponent', () => {
  let component: ModifFactureCpexComponent;
  let fixture: ComponentFixture<ModifFactureCpexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifFactureCpexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifFactureCpexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
