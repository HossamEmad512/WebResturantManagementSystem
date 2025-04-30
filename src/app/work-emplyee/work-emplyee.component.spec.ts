import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEmplyeeComponent } from './work-emplyee.component';

describe('WorkEmplyeeComponent', () => {
  let component: WorkEmplyeeComponent;
  let fixture: ComponentFixture<WorkEmplyeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkEmplyeeComponent]
    });
    fixture = TestBed.createComponent(WorkEmplyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
