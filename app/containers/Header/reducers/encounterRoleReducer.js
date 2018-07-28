import {
  FETCH_ENCOUNTER_ROLE_LOADING,
  FETCH_ENCOUNTER_ROLE_SUCCESS,
  FETCH_ENCOUNTER_ROLE_FAILURE,
} from '../constants';
import initialState from './initialState';

const encounterRole = (state = initialState.encounterRoleReducer, action) => {
  switch (action.type) {
    case FETCH_ENCOUNTER_ROLE_LOADING:
      return {
        ...state,
        isLoading: action.status,
      };
    case FETCH_ENCOUNTER_ROLE_SUCCESS:
      return {
        ...state,
        encounterRole: action.encounterRole,
      };
    case FETCH_ENCOUNTER_ROLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        encounterRole: {},
        error: action.error,
      };
    default:
      return state;
  }
};

export default encounterRole;
