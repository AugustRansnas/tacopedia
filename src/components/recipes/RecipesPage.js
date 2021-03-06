import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';
import RecipeList from './RecipeList';
import {browserHistory} from 'react-router';

class RecipesPage extends React.Component {
   constructor(props, context) {
      super(props, context);
      this.redirectToAddRecipePage = this.redirectToAddRecipePage.bind(this);
   }

   redirectToAddRecipePage() {
     browserHistory.push('./recipe');
   }

   render() {
      const {recipes} = this.props;
      return (
         <div>
            <h1>Recipes</h1>
            <input type="submit"
                   value="Add Recipe"
                   className="btn btn-primary"
                   onClick={this.redirectToAddRecipePage}/>
            <RecipeList recipes={recipes}/>
         </div>
      );
   }
}

RecipesPage.propTypes = {
   actions: PropTypes.object.isRequired,
   recipes: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
   return {recipes: state.recipes};
}

function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(recipeActions, dispatch)
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);
