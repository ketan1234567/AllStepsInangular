import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { activatechildGuard } from './activatechild.guard';

describe('activatechildGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activatechildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
