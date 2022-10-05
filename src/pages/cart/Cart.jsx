import React from "react";
import { useSelector } from "react-redux";
import { Card, Col, Alert } from "react-bootstrap";
import style from "./style.module.css";
import { selectCart } from "../../redux/state/cart";

const Cart = () => {

  const { cart } = useSelector(selectCart);

  return (
    console.log("CART: ", cart),
    <>
      {
        cart !== undefined ?
          cart.map((product, index) => (
            <Col
              xs={12}
              md={4}
              lg={3}
              key={index}
              className="mt-5 position-relative"
            >
              <Card className={`p-3 ${style.container__card}`}>
                <div className={style.bg_overlay}></div>
                <Card.Img
                  variant="top"
                  src={product.image !== "" ? product.image : ""}
                  className={style.heightImage}
                />
                <Card.Body>
                  <Card.Title className={style.fontSize_titleCard}>
                    {product.title}
                  </Card.Title>
                  <Card.Text>{product.shortDescription}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
          :
          <Alert key="warning" variant="warning">
            Se produjo un error al mostrar el producto seleccionado.
            Contacte a santiago
          </Alert>

      }
    </>
  );
};

export default Cart;
