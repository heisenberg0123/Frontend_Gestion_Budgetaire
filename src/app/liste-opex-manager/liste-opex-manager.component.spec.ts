import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOpexManagerComponent } from './liste-opex-manager.component';

describe('ListeOpexManagerComponent', () => {
  let component: ListeOpexManagerComponent;
  let fixture: ComponentFixture<ListeOpexManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeOpexManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeOpexManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
