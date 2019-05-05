import * as ActionTypes from './ActionTypes';

export const Sandwiches = (
  state = { 
  isLoading: true,
  errMess: null,
  sandwiches:[]}, action) => {
  switch (action.type) {
      case ActionTypes.ADD_SANDWICHES:
          return {...state, isLoading: false, errMess: null, sandwiches: action.payload};

      case ActionTypes.SANDWICHES_LOADING:
          return {...state, isLoading: true, errMess: null, sandwiches: []}

      case ActionTypes.SANDWICHES_FAILED:
          return {...state, isLoading: false, errMess: action.payload};

      default:
          return state;
  }
};