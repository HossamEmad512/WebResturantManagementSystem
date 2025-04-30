import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarmeneComponent } from './navbarmene.component';

describe('NavbarmeneComponent', () => {
  let component: NavbarmeneComponent;
  let fixture: ComponentFixture<NavbarmeneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarmeneComponent]
    });
    fixture = TestBed.createComponent(NavbarmeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
