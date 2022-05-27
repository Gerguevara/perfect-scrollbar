import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoFileUploadComponent } from './custo-file-upload.component';

describe('CustoFileUploadComponent', () => {
  let component: CustoFileUploadComponent;
  let fixture: ComponentFixture<CustoFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustoFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustoFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
