import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetManagerComponent } from './projet-manager.component';

describe('ProjetManagerComponent', () => {
  let component: ProjetManagerComponent;
  let fixture: ComponentFixture<ProjetManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
