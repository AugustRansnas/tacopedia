import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const RecipeForm = ({recipe, allAuthors, onSave, onChange, loading, errors}) => {
  return(
    <form>
      <h1>Manage Recipe</h1>
      <TextInput
        name="title"
        label="Titel"
        value={recipe.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="authorId"
        label="Title"
        value={recipe.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}/>

      <TextInput
        name="category"
        label="Category"
        value={recipe.category}
        onChange={onChange}
        error={errors.category}/>

      <TextInput
        name="length"
        label="Length"
        value={recipe.length}
        onChange={onChange}
        error={errors.length}/>

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

RecipeForm.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default RecipeForm;
