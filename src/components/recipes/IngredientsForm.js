import React from 'react';

const IngredientsForm = ({type, value, onChange, onClick}) => {
   return (
     <input
       type={type}
       value={value}
       onChange={onChange}
       onClick={onClick}/>
   );
};

export default IngredientsForm;
