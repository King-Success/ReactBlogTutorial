import { FETCH_POST } from '../actions/index.js';

const INITIAL_STATE = { all: [], post: null };

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
    case FETCH_POST:

    default:
      return state;
    }
}