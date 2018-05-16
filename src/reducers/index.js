import { combineReducers } from 'redux';
import postsReducer from './reducer_post';
import { reducer as formReducer} from 'redux-form';




const rootReducer = combineReducers({
    posts: postsReducer,
    form: formReducer
});

export default rootReducer;
