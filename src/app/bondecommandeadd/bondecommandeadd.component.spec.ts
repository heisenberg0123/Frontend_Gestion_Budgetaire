import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondecommandeaddComponent } from './bondecommandeadd.component';

describe('BondecommandeaddComponent', () => {
  let component: BondecommandeaddComponent;
  let fixture: ComponentFixture<BondecommandeaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondecommandeaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BondecommandeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
