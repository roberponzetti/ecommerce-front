import React from "react";
import { useSelector } from "react-redux";
import { Col, ListGroup, Container, Row } from "react-bootstrap";
import ItemCart from "../../components/cart/ItemCart/ItemCart";
import { selectCart } from "../../redux/state/cart";
import useScroll from "../../hooks/useScroll";
import { priceFormatted, totalPrice } from "../../utilities";
import style from './style.module.css';
import clx from "classnames";
import globalStyle from "../../global-style/style.module.css";

const Cart = () => {

  const { cart } = useSelector(selectCart);

  useScroll();

  console.log(style);
  return (
    <Container>
      <Row>
        <Col xs={8} className={globalStyle.mr_4}>
          <ListGroup>
            {cart.map((product, index) => (
              <ListGroup.Item
                className="d-flex justify-content-between align-items-start"
              >
                <ItemCart product={product} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col xs={4} className={clx("p-4", style.container__summary)}>
          <h2>Resumen de pedido</h2>
          <div className='d-flex mt-5 flex-column'>
            <div className='d-flex justify-content-between'>
              <h5>Subtotal:</h5><span>{priceFormatted(totalPrice(cart))}</span>
            </div>
            <div className='d-flex justify-content-between'>
              <h5>Flete:</h5><span>Gratis</span>
            </div>
          </div>
          <div className='d-flex m-5 justify-content-center '>
            <h5>Total: <span>{priceFormatted(totalPrice(cart))}</span></h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
