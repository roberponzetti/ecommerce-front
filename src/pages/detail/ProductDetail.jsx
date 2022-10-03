import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectProductById } from '../../redux/state/product';
import { useProductById } from '../../hooks/useProductById';
import { Alert, Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";
import style from "./style.module.css";

const ProductDetail = () => {

  const { id } = useParams();
  const { isLoading } = useProductById(id);
  const { selectedProduct } = useSelector(selectProductById);

  var priceFormatted = selectedProduct.price.toLocaleString('es-ar', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  });

  if (isLoading) {
    return (
      <div className='container d-flex justify-content-center align-items-center vh-100'>
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner >
      </div>
    )
  }

  return (
    <>
      {selectedProduct !== undefined ?
        <Container>
          <Row className="mt-5">
            <Col
              sm={6}
              className="mt-5 position-relative"
            >
              <Image src={selectedProduct.image !== "" ? selectedProduct.image : ""} height="300"></Image>
            </Col>
            <Col>
              <h1>{selectedProduct.title}</h1>
              <h2>{priceFormatted}</h2>
              <h4>{selectedProduct.shortDescription}</h4>
              <h5>{selectedProduct.largeDescription}</h5>
              <br />
              <Button onClick={() => alert("Al carrito")}><BsFillCartFill /> Agregar al carrito</Button>

            </Col>
          </Row>
        </Container> :
        <Alert key="warning" variant="warning">
          Se produjo un error al mostrar el producto seleccionado.
          Contacte a santiago
        </Alert>
      }
    </>
  )
}

export default ProductDetail
