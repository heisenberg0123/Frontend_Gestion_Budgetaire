import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifListCapexAdminComponent } from './modif-list-capex-admin.component';

describe('ModifListCapexAdminComponent', () => {
  let component: ModifListCapexAdminComponent;
  let fixture: ComponentFixture<ModifListCapexAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifListCapexAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifListCapexAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
