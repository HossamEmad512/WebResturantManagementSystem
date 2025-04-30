import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisiterComponent } from './regisiter.component';

describe('RegisiterComponent', () => {
  let component: RegisiterComponent;
  let fixture: ComponentFixture<RegisiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisiterComponent]
    });
    fixture = TestBed.createComponent(RegisiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
