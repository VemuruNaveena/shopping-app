import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { ageGuard } from './age.guard';

describe('ageGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
