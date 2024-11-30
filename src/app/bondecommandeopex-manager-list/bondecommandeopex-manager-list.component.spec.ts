import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondecommandeopexManagerListComponent } from './bondecommandeopex-manager-list.component';

describe('BondecommandeopexManagerListComponent', () => {
  let component: BondecommandeopexManagerListComponent;
  let fixture: ComponentFixture<BondecommandeopexManagerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondecommandeopexManagerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BondecommandeopexManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
