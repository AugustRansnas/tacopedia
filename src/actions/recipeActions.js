import * as types from './actionTypes';
import RecipeApi from '../api/mockCourseApi';

export function loadRecipesSuccess(recipes) {
   return {type: types.LOAD_RECIPES_SUCCESS, recipes};
}

export function createRecipeSuccess(recipe) {
   return {type: types.CREATE_RECIPE_SUCCESS, recipe};
}

 export function updateRecipeSuccess(recipe) {
   return {type: types.UPDATE_RECIPE_SUCCESS, recipe};
 }

export function loadRecipes() {
   return function(dispatch) {
      return RecipeApi.getAllCourses().then(recipes => {
         dispatch(loadRecipesSuccess(recipes));
      }).catch(error => {
         throw(error);
      });
   };
}

export function saveRecipe(recipe) {
   return function(dispatch/*, getState*/) {
      return RecipeApi.saveCourse(recipe).then(savedRecipe => {
         recipe.id ? dispatch(updateRecipeSuccess(savedRecipe)) :
         dispatch(createRecipeSuccess(savedRecipe));
      }).catch(error => {
         throw(error);
      });
   };
}
