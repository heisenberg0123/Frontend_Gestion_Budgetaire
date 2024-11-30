import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommationUtilComponent } from './consommation-util.component';

describe('ConsommationUtilComponent', () => {
  let component: ConsommationUtilComponent;
  let fixture: ComponentFixture<ConsommationUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsommationUtilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsommationUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
