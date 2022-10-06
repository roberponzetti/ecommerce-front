import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectProduct } from '../../redux/state/product';
import { useProductById } from '../../hooks/useProductById';
import { Alert, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";
import style from "./style.module.css";
import clx from 'classnames';


const ProductDetail = () => {

  const { id } = useParams();
  const { isLoading } = useProductById(id);
  const { selectedProduct } = useSelector(selectProduct);
  const outStock = selectedProduct?.stock === 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  var priceFormatted = selectedProduct?.price?.toLocaleString('es-ar', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  });

  if (isLoading) {
    return (
      <div className='container d-flex justify-content-center align-items-center vh-100'>
        <Spinner animation="border" role="status" variant="dark">
          <span className="visually-hidden">Loading...</span>
        </Spinner >
      </div>
    )
  }

  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
      {selectedProduct !== null ?
        <Container className='mt-5 d-flex justify-content-center align-items-center'>
          <Row className="mt-5 d-flex justify-content-center align-items-center">
            <Col
              sm={4}

            >
              <Image className={clx(style.object_fit, style.image_product)} src={selectedProduct.image !== "" ? selectedProduct.image : ""} height="300"></Image>
            </Col>
            <Col sm={7}>
              <h2 className={style.title_product}>{selectedProduct.title}</h2>
              <span className={style.price_formatted}>{priceFormatted}</span>
              <p className={style.short_description}>{selectedProduct.shortDescription}</p>
              <p className={style.large_description}>{selectedProduct.largeDescription}</p>
              <br />

              <button {...(outStock ? { disabled: "disabled" } : {})} className={clx(style.button_add_cart, { [style.disabled]: outStock })} onClick={() => alert("Al carrito")}><BsFillCartFill /> Agregar al carrito</button>
              <span className={clx('d-block mt-3', style.stock)}>( Stock {selectedProduct.stock} )</span>
            </Col>
          </Row>
        </Container>
        :
        <Alert className={style.margin_top} variant="danger">
          Se produjo un error al mostrar el producto seleccionado.
        </Alert>
      }
    </div>
  )
}

export default ProductDetail
