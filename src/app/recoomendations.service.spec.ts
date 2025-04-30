import { TestBed } from '@angular/core/testing';

import { RecoomendationsService } from './recoomendations.service';

describe('RecoomendationsService', () => {
  let service: RecoomendationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoomendationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
