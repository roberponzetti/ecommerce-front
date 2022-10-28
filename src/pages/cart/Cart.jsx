import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, ListGroup, Container, Row } from "react-bootstrap";
import ItemCart from "../../components/cart/ItemCart/ItemCart";
import { clearCart, selectCart } from "../../redux/state/cart";
import useScroll from "../../hooks/useScroll";
import { priceFormatted, totalPrice } from "../../utilities";
import style from './style.module.css';
import clx from "classnames";
import globalStyle from "../../global-style/style.module.css";
import CustomButton from '../../components/button/CustomButton'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase/config";
import { selectAuth } from "../../redux/state/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const styleItemCart = {
  height: '100px',
  width: '100px',
  fontSize: '16px'
};

const Cart = () => {

  const { cart } = useSelector(selectCart);
  const { user } = useSelector(selectAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useScroll();

  const handlePurchase = async () => {

    if (user) {
      const db = getFirestore(initializeApp(firebaseConfig));
      const date = new Date().toLocaleDateString();

      const buyer = {
        email: user.email,
        name: user?.displayName || '',
        phone: '',
        date: date,
        items: cart
      };

      try {
        const docRef = await addDoc(collection(db, "buyer"), buyer);
        Swal.fire({
          title: '¿Está seguro que desea finalizar la compra?',
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: 'Si',
          denyButtonText: 'No',
          confirmButtonColor: '#6B8CBD',
          denyButtonColor: '#BD816B',
          customClass: {
            title: style.title_sweet_alert,
          }
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: 'Compra realizada satisfactoriamente. Su nro. de pedido es: ' + docRef.id, confirmButtonColor: '#8CBD6B', icon: 'success', customClass: {
                title: style.title_sweet_alert,
              }
            });
            dispatch(clearCart());
            navigate('/');
          }
        })
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      navigate("/login");
    }
  }

  return (
    <Container>
      <h2 className={style.my_cart}>Mi carrito</h2>
      {cart.length > 0 ?
        < Row >
          <Col lg={8} className={globalStyle.mr_4}>
            <ListGroup>
              {cart.map((product, index) => (
                <ListGroup.Item
                  key={index}
                  className={clx('d-flex justify-content-between align-items-start mt-3', style.container__summary)}
                >
                  <ItemCart product={product} style={styleItemCart} />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg={4} className={clx(style.container__summary, style.fixed__summary)}>
            <h4 className="mt-3">Resumen de pedido</h4>
            <div className='d-flex mt-5 flex-column'>
              <div className='d-flex justify-content-between'>
                <p>Subtotal:</p><span>{priceFormatted(totalPrice(cart))}</span>
              </div>
              <div className='d-flex justify-content-between'>
                <p>Flete:</p><span>Gratis</span>
              </div>
            </div>
            <div className='d-flex m-5 justify-content-center '>
              <p className="fw-bold">Total: <span>{priceFormatted(totalPrice(cart))}</span></p>
            </div>
            <CustomButton handle={handlePurchase} >
              Confirmar compra
            </CustomButton>
          </Col>
        </Row>
        :
        <div>
          <img height={300} src="https://olsi-trade.ru/local/templates/olsi/img/icon/empty-basket.svg" alt="carrito vacio" />
          <p className="mt-4">Tu carrito está vacío.</p>

        </div>

      }
    </Container>
  );
};

export default Cart;
