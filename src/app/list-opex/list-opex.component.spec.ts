import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOpexComponent } from './list-opex.component';

describe('ListOpexComponent', () => {
  let component: ListOpexComponent;
  let fixture: ComponentFixture<ListOpexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOpexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOpexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
