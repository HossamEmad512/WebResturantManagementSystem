import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdataComponent } from './updata.component';

describe('UpdataComponent', () => {
  let component: UpdataComponent;
  let fixture: ComponentFixture<UpdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdataComponent]
    });
    fixture = TestBed.createComponent(UpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
