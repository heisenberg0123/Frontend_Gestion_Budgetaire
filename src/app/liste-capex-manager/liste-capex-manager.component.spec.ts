import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCapexManagerComponent } from './liste-capex-manager.component';

describe('ListeCapexManagerComponent', () => {
  let component: ListeCapexManagerComponent;
  let fixture: ComponentFixture<ListeCapexManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCapexManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCapexManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
