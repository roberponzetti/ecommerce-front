import React from 'react';
import clx from 'classnames';
import style from "./style.module.css";


const CustomButton = ({ outStock = false, handle, children, ...rest }) => {
  return (
    <button {...(outStock ? { disabled: "disabled" } : {})}
      className={clx(style.button_add_cart, { [style.disabled]: outStock })}
      onClick={handle}
      {...rest}
    >

      {children}
    </button>
  )
}

export default CustomButton
