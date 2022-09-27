import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectProduct } from "../../../../redux/state/product";
import style from "./style.module.css";

const ProductList = () => {
  const { products } = useSelector(selectProduct);
  return (
    <Container>
      <Row className="mt-5">
        {products.map((product, index) => (
          <Col xs={12} md={4} lg={3} key={index} className="mt-5">
            <Card className="p-3">
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
                <div className="mt-5 d-flex justify-content-center">
                  <Button variant="outline-dark" className="mx-2">
                    Detalle
                  </Button>

                  <Button variant="outline-dark">Agregar</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
