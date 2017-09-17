import React, {PropTypes} from 'react';

const Input = ({type, value, onChange, onClick}) => {
   return (
       <input
         type={type}
         value={value}
         onChange={onChange}
         onClick={onClick}/>
   );
};

Input.propTypes = {
   type: PropTypes.string,
   value: PropTypes.string,
   onChange: PropTypes.function,
   onClick: PropTypes.function
};

export default Input;
