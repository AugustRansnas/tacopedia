import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';
import Input from '../common/Input';
import RecipeList from './RecipeList';

class RecipesPage extends React.Component {
   constructor(props, context) {
      super(props, context);
   }

   render() {
     const {recipes} = this.props;
      return (
         <div>
            <h1>Recipes</h1>
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
