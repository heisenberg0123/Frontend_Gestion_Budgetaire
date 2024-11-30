import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOpexLeadComponent } from './liste-opex-lead.component';

describe('ListeOpexLeadComponent', () => {
  let component: ListeOpexLeadComponent;
  let fixture: ComponentFixture<ListeOpexLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeOpexLeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeOpexLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
