import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCapexManagerComponent } from './ajout-capex-manager.component';

describe('AjoutCapexManagerComponent', () => {
  let component: AjoutCapexManagerComponent;
  let fixture: ComponentFixture<AjoutCapexManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCapexManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutCapexManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
