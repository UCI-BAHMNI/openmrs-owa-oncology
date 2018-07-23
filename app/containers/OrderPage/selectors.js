import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the orderPage state domain
 */

const selectOrderPageDomain = state => state.get('orderPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by OrderPage
 */

const makeSelectRegimenList = () =>
  createSelector(selectOrderPageDomain, substate =>
    substate.get('regimenList'),
  );

export { makeSelectRegimenList };
