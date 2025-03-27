import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { formStatusGuard } from './form-status.guard';

describe('formStatusGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => formStatusGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
