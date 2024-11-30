import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOpexUtilComponent } from './liste-opex-util.component';

describe('ListeOpexUtilComponent', () => {
  let component: ListeOpexUtilComponent;
  let fixture: ComponentFixture<ListeOpexUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeOpexUtilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeOpexUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
