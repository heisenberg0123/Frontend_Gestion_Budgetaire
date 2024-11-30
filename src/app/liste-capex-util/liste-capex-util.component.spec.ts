import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCapexUtilComponent } from './liste-capex-util.component';

describe('ListeCapexUtilComponent', () => {
  let component: ListeCapexUtilComponent;
  let fixture: ComponentFixture<ListeCapexUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCapexUtilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCapexUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
