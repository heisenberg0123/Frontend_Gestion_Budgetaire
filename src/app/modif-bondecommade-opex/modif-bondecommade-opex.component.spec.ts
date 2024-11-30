import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifBondecommadeOpexComponent } from './modif-bondecommade-opex.component';

describe('ModifBondecommadeOpexComponent', () => {
  let component: ModifBondecommadeOpexComponent;
  let fixture: ComponentFixture<ModifBondecommadeOpexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifBondecommadeOpexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifBondecommadeOpexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
