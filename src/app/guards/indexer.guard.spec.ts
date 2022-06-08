import { TestBed } from '@angular/core/testing';

import { IndexerGuard } from './indexer.guard';

describe('IndexerGuard', () => {
  let guard: IndexerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IndexerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
