import React from "react";
import classes from "./MyInput.module.css";

// const MyInput = React.forwardRef((props, ref) => {
//   return (
//   <input ref={ref} className={classes.myInput} {...props} />
//   )
// });

const MyInput = (props) => {
  return (
    <div>
      {/* <label htmlFor={classes.myInput}>ывоащшзывоазщ</label> */}
      <input className={classes.myInput} {...props} />
    </div>
  );
};

export default MyInput;
