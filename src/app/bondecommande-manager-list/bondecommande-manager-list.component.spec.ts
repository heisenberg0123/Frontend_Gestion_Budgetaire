import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondecommandeManagerListComponent } from './bondecommande-manager-list.component';

describe('BondecommandeManagerListComponent', () => {
  let component: BondecommandeManagerListComponent;
  let fixture: ComponentFixture<BondecommandeManagerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondecommandeManagerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BondecommandeManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
