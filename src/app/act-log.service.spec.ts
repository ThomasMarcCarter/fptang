import { TestBed } from '@angular/core/testing';

import { ActLogService } from './act-log.service';

describe('DataService', () => {
  let service: ActLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
