import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatWorkEmplyeeComponent } from './updat-work-emplyee.component';

describe('UpdatWorkEmplyeeComponent', () => {
  let component: UpdatWorkEmplyeeComponent;
  let fixture: ComponentFixture<UpdatWorkEmplyeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatWorkEmplyeeComponent]
    });
    fixture = TestBed.createComponent(UpdatWorkEmplyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
