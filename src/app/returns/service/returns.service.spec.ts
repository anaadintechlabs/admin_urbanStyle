import { TestBed } from '@angular/core/testing';

import { ReturnsService } from './returns.service';

describe('ReturnsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReturnsService = TestBed.get(ReturnsService);
    expect(service).toBeTruthy();
  });
});
