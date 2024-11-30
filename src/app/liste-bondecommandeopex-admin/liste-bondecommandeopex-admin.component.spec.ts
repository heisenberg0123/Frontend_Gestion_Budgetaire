import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBondecommandeopexAdminComponent } from './liste-bondecommandeopex-admin.component';

describe('ListeBondecommandeopexAdminComponent', () => {
  let component: ListeBondecommandeopexAdminComponent;
  let fixture: ComponentFixture<ListeBondecommandeopexAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBondecommandeopexAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBondecommandeopexAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
