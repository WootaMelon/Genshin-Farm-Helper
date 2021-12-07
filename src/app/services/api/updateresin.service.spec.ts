import { TestBed } from '@angular/core/testing';

import { UpdateresinService } from './updateresin.service';

describe('UpdateresinService', () => {
  let service: UpdateresinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateresinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
