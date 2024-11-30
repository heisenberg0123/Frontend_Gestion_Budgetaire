import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosommationLeadComponent } from './cosommation-lead.component';

describe('CosommationLeadComponent', () => {
  let component: CosommationLeadComponent;
  let fixture: ComponentFixture<CosommationLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosommationLeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosommationLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
