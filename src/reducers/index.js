import {combineReducers} from 'redux';
import recipes from './recipeReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  recipes,
  authors
});

export default rootReducer;
