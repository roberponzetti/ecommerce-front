import React from "react";
import { useDispatch } from "react-redux";
import { selectProduct, showMore } from "../../../../redux/state/product";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import style from "./style.module.css";
import Product from "../product/Product";
import ModalAddQuantity from "../modal/ModalAddQuantity";
import useDebounce from "../../../../hooks/useDebounce";


const ProductList = () => {
  const { products, count } = useSelector(selectProduct);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const [filteredText, setFilteredText] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const valueMemo = useDebounce(filteredText);

  const filteredProduct = products.filter((product) => product.title.toLowerCase().includes(valueMemo?.toLowerCase()));

  const handleShowMore = () => {
    dispatch(showMore());
  }

  const handleToDetail = (id) => {
    navigate("/detail/" + id);
  }

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowModal(prev => !prev);
  }

  return (
    <Container>
      <ModalAddQuantity
        showModal={showModal}
        handleOpenModal={handleOpenModal}
        product={selectedProduct}
        setShowModal={setShowModal}
      />
      <Row className="mt-5 d-flex justify-content-center">
        <Col xs={12} lg={6} className="position-relative">
          <input placeholder="Buscar producto..." type="text" className={style.input_search} onChange={(event) => setFilteredText(event.target.value)} />
          <BiSearch size={20} className={style.icon_search} />
        </Col>
      </Row>
      <Row className="mt-5">
        {filteredProduct.slice(0, count).map((product, index) => (
          <Product
            key={index}
            product={product}
            handleToDetail={handleToDetail}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </Row>
      <Row className="mt-5">
        <Col>
          {count < products.length && <button className={style.button_add_cart} onClick={handleShowMore}>Show more</button>}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
