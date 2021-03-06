import * as actions from './constants';
import { ADMIN_CONTENT_TYPE } from '../../constants';

const initialState = {
  isLoading: false,
  error: null,
  adminContentType: ADMIN_CONTENT_TYPE.TABLE,
};

export function systemReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_ERROOR_MESSAGE: {
      return {
        ...state,
        error: action.value,
      };
    }
    case actions.SET_LOADING_STATUS: {
      return {
        ...state,
        isLoading: action.value,
      };
    }
    case actions.SET_ADMIN_CONTENT_TYPE: {
      return {
        ...state,
        adminContentType: action.value,
      };
    }
    default:
      return state;
  }
}

export * from './actions';
export * from './selectors';
