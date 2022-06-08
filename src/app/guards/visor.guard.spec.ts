import { TestBed } from '@angular/core/testing';

import { VisorGuard } from './visor.guard';

describe('VisorGuard', () => {
  let guard: VisorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VisorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
