/*
 *
 * OrderPage actions
 *
 */

import {
  LOAD_REGIMEN_LIST,
  LOAD_REGIMEN_LIST_SUCCESS,
  LOAD_REGIMEN_LIST_ERROR,
  UPDATE_ORDER,
} from './constants';

export function loadRegimenList() {
  return {
    type: LOAD_REGIMEN_LIST,
  };
}

export function regimenListLoaded(regimenList) {
  return {
    type: LOAD_REGIMEN_LIST_SUCCESS,
    regimenList,
  };
}

export function regimenListLoadingError(error) {
  return {
    type: LOAD_REGIMEN_LIST_ERROR,
    error,
  };
}

export function updateOrder(index, order) {
  return {
    type: UPDATE_ORDER,
    index,
    order,
  };
}

