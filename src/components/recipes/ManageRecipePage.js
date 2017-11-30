import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';
import RecipeForm from './RecipeForm';

class ManageRecipePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      recipe: Object.assign({}, props.recipe),
      errors: {}
    };
    this.updateRecipeState = this.updateRecipeState.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.recipe.id !== nextProps.recipe.id) {
      this.setState({recipe : Object.assign({}, nextProps.recipe)});
    }
  }

  updateRecipeState(event) {
    const field = event.target.name;
    let recipe = Object.assign({}, this.state.recipe);
    recipe[field] = event.target.value;
    return this.setState({recipe: recipe});
  }

  saveRecipe(event) {
    event.preventDefault();
    this.props.actions.saveRecipe(this.state.recipe);
    this.context.router.push('/recipes');
  }

  render() {
    return (
        <RecipeForm
          allAuthors={this.props.authors}
          onChange={this.updateRecipeState}
          onSave={this.saveRecipe}
          recipe={this.state.recipe}
          errors={this.state.errors}
        />
    );
  }
}

ManageRecipePage.propTypes = {
  recipe: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageRecipePage.contextTypes = {
  router: PropTypes.object
};

function getRecipeById(recipes, id) {
  const recipe = recipes.filter(recipe => recipe.id === id);
  if(recipe) return recipe[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const recipeId = ownProps.params.id;
  let recipe = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if(recipeId && state.recipes.length > 0) {
    recipe = getRecipeById(state.recipes, recipeId);
  }
  const authorsFormattedForDropdowwn = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    recipe: recipe,
    authors: authorsFormattedForDropdowwn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipePage);
