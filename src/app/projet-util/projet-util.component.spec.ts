import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetUtilComponent } from './projet-util.component';

describe('ProjetUtilComponent', () => {
  let component: ProjetUtilComponent;
  let fixture: ComponentFixture<ProjetUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetUtilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
