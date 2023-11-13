import cl from './MySelect.module.css';
import React from "react";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select className={cl.mySelect} value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled value="value">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
