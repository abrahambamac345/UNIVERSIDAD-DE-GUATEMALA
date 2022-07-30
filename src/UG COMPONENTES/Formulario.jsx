import React from 'react';
import "./Formulario.css";

const Formulario = (props) => {
    const { label, errorm, onChange, id, ...inputProps } = props;
  return (
    <div className="Formulario">
    <label>{label}</label>
    <input
     {...inputProps}
       
     onChange={onChange} 
     />
       <span>{errorm}</span>
      </div>
  );
};

export default Formulario;