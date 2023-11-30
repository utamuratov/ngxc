import { TestBed } from '@angular/core/testing';

import { NgxcService } from './ngxc.service';

describe('NgxcService', () => {
  let service: NgxcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
