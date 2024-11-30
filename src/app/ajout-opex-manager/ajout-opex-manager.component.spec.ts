import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutOpexManagerComponent } from './ajout-opex-manager.component';

describe('AjoutOpexManagerComponent', () => {
  let component: AjoutOpexManagerComponent;
  let fixture: ComponentFixture<AjoutOpexManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutOpexManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutOpexManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
