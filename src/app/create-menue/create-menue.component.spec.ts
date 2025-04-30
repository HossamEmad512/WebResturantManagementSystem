import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMenueComponent } from './create-menue.component';

describe('CreateMenueComponent', () => {
  let component: CreateMenueComponent;
  let fixture: ComponentFixture<CreateMenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMenueComponent]
    });
    fixture = TestBed.createComponent(CreateMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
