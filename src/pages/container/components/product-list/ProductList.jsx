import React from "react";
import { Button, Card } from "react-bootstrap";
import style from "./style.module.css";

const ProductList = ({ products }) => {
  console.log(style);
  return (
    <div className="d-flex container mt-5">
      {products.map((product, index) => (
        <Card key={index} style={{ width: "18rem" }} className="m-2">
          <Card.Img
            variant="top"
            src={product.image !== "" ? product.image : ""}
            className={style.heightImage}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.shortDescription}</Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
