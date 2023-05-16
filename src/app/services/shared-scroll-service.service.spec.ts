import { TestBed } from '@angular/core/testing';

import { SharedScrollServiceService } from './shared-scroll-service.service';

describe('SharedScrollServiceService', () => {
  let service: SharedScrollServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedScrollServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
