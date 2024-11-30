import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifBondeManagerComponent } from './modif-bonde-manager.component';

describe('ModifBondeManagerComponent', () => {
  let component: ModifBondeManagerComponent;
  let fixture: ComponentFixture<ModifBondeManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifBondeManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifBondeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
