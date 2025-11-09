import { TestBed } from '@angular/core/testing';

import { Mediaservice } from './mediaservice';

describe('Mediaservice', () => {
  let service: Mediaservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mediaservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
