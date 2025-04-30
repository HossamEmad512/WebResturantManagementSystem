import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRecommendationsComponent } from './get-recommendations.component';

describe('GetRecommendationsComponent', () => {
  let component: GetRecommendationsComponent;
  let fixture: ComponentFixture<GetRecommendationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetRecommendationsComponent]
    });
    fixture = TestBed.createComponent(GetRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
