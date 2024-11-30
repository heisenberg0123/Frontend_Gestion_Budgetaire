import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCapexComponent } from './liste-capex.component';

describe('ListeCapexComponent', () => {
  let component: ListeCapexComponent;
  let fixture: ComponentFixture<ListeCapexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCapexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCapexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
