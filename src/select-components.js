import React from 'react';

const SelectComp = ({ options, value, setValue }) => {
  return (
    <select value={value} onChange={({ target }) => setValue(target.value)}>
      <option value="" disabled>
        selecione
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectComp;
