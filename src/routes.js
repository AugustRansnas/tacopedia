import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import RecipesPage from './components/recipes/RecipesPage';
import ManageRecipePage from './components/recipes/ManageRecipePage';

export default(
   <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="recipes" component={RecipesPage}/>
      <Route path="recipe" component={ManageRecipePage}/>
      <Route path="recipe/:id" component={ManageRecipePage}/>
   </Route>
);
