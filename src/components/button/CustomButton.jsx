import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import clx from 'classnames';
import style from "./style.module.css";


const CustomButton = ({ outStock, handleAdd, children, ...rest }) => {
  return (
    <button {...(outStock ? { disabled: "disabled" } : {})}
      className={clx(style.button_add_cart, { [style.disabled]: outStock })}
      onClick={handleAdd}><BsFillCartFill
        {...rest}
      />
      {children}
    </button>
  )
}

export default CustomButton
