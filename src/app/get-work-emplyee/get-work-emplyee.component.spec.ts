import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWorkEmplyeeComponent } from './get-work-emplyee.component';

describe('GetWorkEmplyeeComponent', () => {
  let component: GetWorkEmplyeeComponent;
  let fixture: ComponentFixture<GetWorkEmplyeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetWorkEmplyeeComponent]
    });
    fixture = TestBed.createComponent(GetWorkEmplyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
