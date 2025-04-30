import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationsfoodComponent } from './recommendationsfood.component';

describe('RecommendationsfoodComponent', () => {
  let component: RecommendationsfoodComponent;
  let fixture: ComponentFixture<RecommendationsfoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendationsfoodComponent]
    });
    fixture = TestBed.createComponent(RecommendationsfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
