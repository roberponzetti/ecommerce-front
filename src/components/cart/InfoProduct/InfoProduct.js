import React from 'react'
import { Image } from 'react-bootstrap'
import style from "./style.module.css";
import classNames from 'classnames';
import styleGlobal from '../../../global-style/style.module.css'

const InfoProduct = ({ product }) => {
  return (
    <>
      <Image className={styleGlobal.cursor_pointer} height='50' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6628cd7a-dd6a-43d3-a2b1-a9c921a93f98/d4q0qtb-45c9906e-6ad2-48e7-a071-c1c6b0904f5c.png/v1/fill/w_329,h_389,strp/remera_png_by_madi_muffin_d4q0qtb-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzg5IiwicGF0aCI6IlwvZlwvNjYyOGNkN2EtZGQ2YS00M2QzLWEyYjEtYTljOTIxYTkzZjk4XC9kNHEwcXRiLTQ1Yzk5MDZlLTZhZDItNDhlNy1hMDcxLWMxYzZiMDkwNGY1Yy5wbmciLCJ3aWR0aCI6Ijw9MzI5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.BdpUDijRp562FaEbHyHw3zHJTAXmOGYo8eYWQnIor6o" alt="image-product" />
      <div className='d-flex'>
        <p className={styleGlobal.mr_3}>Product one</p>
        <p className={classNames(style.price_product)}>$5,500</p>
      </div>
    </>
  )
}

export default InfoProduct
