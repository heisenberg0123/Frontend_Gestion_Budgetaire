import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifListOpexAdminComponent } from './modif-list-opex-admin.component';

describe('ModifListOpexAdminComponent', () => {
  let component: ModifListOpexAdminComponent;
  let fixture: ComponentFixture<ModifListOpexAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifListOpexAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifListOpexAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
