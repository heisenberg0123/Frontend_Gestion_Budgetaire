import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetLeadComponent } from './projet-lead.component';

describe('ProjetLeadComponent', () => {
  let component: ProjetLeadComponent;
  let fixture: ComponentFixture<ProjetLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetLeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
