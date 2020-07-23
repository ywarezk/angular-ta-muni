import { TestBed } from '@angular/core/testing';

import { Forms2Service } from './forms2.service';

describe('Forms2Service', () => {
  let service: Forms2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Forms2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
