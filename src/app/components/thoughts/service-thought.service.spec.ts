import { TestBed } from '@angular/core/testing';

import { ServiceThoughtService } from './service-thought.service';

describe('ServiceThoughtService', () => {
  let service: ServiceThoughtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceThoughtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
