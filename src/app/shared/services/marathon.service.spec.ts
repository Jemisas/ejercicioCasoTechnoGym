import { TestBed } from '@angular/core/testing';

import { MarathonService } from './marathon.service';

describe('MarathonService', () => {
  let service: MarathonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarathonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
