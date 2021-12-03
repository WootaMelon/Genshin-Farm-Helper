import { TestBed } from '@angular/core/testing';

import { GetTipsService } from './get-tips.service';

describe('GetTipsService', () => {
  let service: GetTipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
