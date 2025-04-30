import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpyleeComponent } from './empylee.component';

describe('EmpyleeComponent', () => {
  let component: EmpyleeComponent;
  let fixture: ComponentFixture<EmpyleeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpyleeComponent]
    });
    fixture = TestBed.createComponent(EmpyleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
