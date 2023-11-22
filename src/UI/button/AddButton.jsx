import React from "react";
import cl from './AddButton.module.css';

const AddButton = ({children, ...props}) => {
    return <button {...props} className={cl.myAddBtn}>{children}</button>;
  };

export default AddButton;