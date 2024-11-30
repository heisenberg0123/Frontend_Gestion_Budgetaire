import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLeadComponent } from './home-lead.component';

describe('HomeLeadComponent', () => {
  let component: HomeLeadComponent;
  let fixture: ComponentFixture<HomeLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
