import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommationManagerComponent } from './consommation-manager.component';

describe('ConsommationManagerComponent', () => {
  let component: ConsommationManagerComponent;
  let fixture: ComponentFixture<ConsommationManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsommationManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsommationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
