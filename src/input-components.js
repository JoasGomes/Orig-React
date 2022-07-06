import React from 'react';

const InputComp = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};

export default InputComp;
