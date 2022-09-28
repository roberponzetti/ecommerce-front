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
              <div className={` position-absolute ${style.container_buttons}`}>
                <Button variant="outline-light" className="mx-2">
                  Detalle
                </Button>

                <Button variant="outline-light">Agregar</Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
