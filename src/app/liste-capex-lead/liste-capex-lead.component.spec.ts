import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCapexLeadComponent } from './liste-capex-lead.component';

describe('ListeCapexLeadComponent', () => {
  let component: ListeCapexLeadComponent;
  let fixture: ComponentFixture<ListeCapexLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCapexLeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCapexLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
