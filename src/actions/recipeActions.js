import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadRecipesSuccess(recipes) {
   return {type: types.LOAD_RECIPES_SUCCESS, recipes};
}

export function loadRecipes() {
   return function(dispatch) {
      return courseApi.getAllCourses().then(recipes => {
         dispatch(loadRecipesSuccess(recipes));
      }).catch(error => {
         throw(error);
      });
   };
}
