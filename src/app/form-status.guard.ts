import { CanDeactivateFn } from '@angular/router';

export const formStatusGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  console.log('Deactivate guard...');
  return true;
};
