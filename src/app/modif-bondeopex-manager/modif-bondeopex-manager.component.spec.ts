import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifBondeopexManagerComponent } from './modif-bondeopex-manager.component';

describe('ModifBondeopexManagerComponent', () => {
  let component: ModifBondeopexManagerComponent;
  let fixture: ComponentFixture<ModifBondeopexManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifBondeopexManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifBondeopexManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
