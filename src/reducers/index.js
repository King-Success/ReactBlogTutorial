import { combineReducers } from 'redux';
import postsReducer from './reducer_post';




const rootReducer = combineReducers({
    posts: postsReducer
});

export default rootReducer;
