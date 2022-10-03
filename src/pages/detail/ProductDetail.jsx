import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectProductById } from '../../redux/state/product';
import { useProductById } from '../../hooks/useProductById';
import { Card, Col, Container, Row } from "react-bootstrap";
import style from "./style.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  useProductById(id);

  const { selectedProduct } = useSelector(selectProductById);
  console.log("SELECTED PRODUCT: ", selectedProduct);
  return (
    <>
      {selectedProduct !== undefined ?
        <Container>
          <Row className="mt-5">
            <Col
              xs={12}
              md={12}
              lg={12}
              className="mt-5 position-relative"
            >
              <Card className={`p-3 ${style.container__card}`}>
                <div className={style.bg_overlay}></div>
                <Card.Img
                  variant="top"
                  src={selectedProduct.image !== "" ? selectedProduct.image : ""}
                  className={style.heightImage}
                />
                <Card.Body>
                  <Card.Title className={style.fontSize_titleCard}>
                    {selectedProduct.title}
                  </Card.Title>
                  <Card.Text>{selectedProduct.shortDescription}</Card.Text>
                  <Card.Text>{selectedProduct.largeDescription}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container> :
        <div>Se produjo un error con el producto seleccionado.</div>}
    </>

  )
}

export default ProductDetail