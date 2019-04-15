import { TestBed } from '@angular/core/testing';

import { MatchMediaService } from './match-media.service';

describe('MatchMediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchMediaService = TestBed.get(MatchMediaService);
    expect(service).toBeTruthy();
  });
});
