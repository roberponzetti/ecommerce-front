import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsFillCartPlusFill, BsInfoSquare } from "react-icons/bs";
import { priceFormatted } from "../../../../utilities";
import clx from "classnames";
import globalStyle from "../../../../global-style/style.module.css";
import style from "./style.module.css";

const Product = ({ product, handleToDetail, handleOpenModal }) => {
  return (
    <Col
      xs={12}
      md={4}
      lg={3}

      className="mt-5 position-relative"
    >
      <Card className={clx('p-3', style.container__card)}>
        <div onClick={() => handleToDetail(product.id)} className={style.bg_overlay}></div>
        <Card.Img
          variant="top"
          src={product.image !== "" ? product.image : ""}
          className={clx(style.heightImage, style.fit_contain)}
        />
        <Card.Body>
          <Card.Title className={style.fontSize_titleCard}>
            {product.title}
          </Card.Title>
          <Card.Text>{product.shortDescription}</Card.Text>
          <Card.Text className="fw-bold mt-2">{priceFormatted(product.price)}</Card.Text>
          <Card.Text className={clx('d-block mt-3', style.stock)}>({product.stock} disponibles)</Card.Text>

        </Card.Body>
        <div className={clx('position-absolute', style.container_buttons)}>
          <Link to={`/detail/${product.id}`}>
            <Button variant="outline-light" className="mx-2">
              <BsInfoSquare className={globalStyle.mr_1} />
              Detalle
            </Button>
          </Link>

          <Button variant="outline-light" onClick={() => handleOpenModal(product)}>
            <BsFillCartPlusFill className={globalStyle.mr_1} />
            Agregar
          </Button>
        </div>
      </Card>
    </Col>
  )
}

export default Product
