import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseAdminComponent } from './analyse-admin.component';

describe('AnalyseAdminComponent', () => {
  let component: AnalyseAdminComponent;
  let fixture: ComponentFixture<AnalyseAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
