import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdataEmplyeeComponent } from './updata-emplyee.component';

describe('UpdataEmplyeeComponent', () => {
  let component: UpdataEmplyeeComponent;
  let fixture: ComponentFixture<UpdataEmplyeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdataEmplyeeComponent]
    });
    fixture = TestBed.createComponent(UpdataEmplyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
