import { combineReducers } from 'redux';
import BooksReducer from './book_reducer.js';
import ActiveBook from './active_book_reducer.js';


const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
