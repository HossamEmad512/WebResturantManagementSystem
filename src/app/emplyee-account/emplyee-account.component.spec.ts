import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeeAccountComponent } from './emplyee-account.component';

describe('EmplyeeAccountComponent', () => {
  let component: EmplyeeAccountComponent;
  let fixture: ComponentFixture<EmplyeeAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmplyeeAccountComponent]
    });
    fixture = TestBed.createComponent(EmplyeeAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
