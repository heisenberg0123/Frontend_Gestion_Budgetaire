import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAdminComponent } from './projects-admin.component';

describe('ProjectsAdminComponent', () => {
  let component: ProjectsAdminComponent;
  let fixture: ComponentFixture<ProjectsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
