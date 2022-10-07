import React, { useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from '../../redux/state/product';
import { useProductById } from '../../hooks/useProductById';
import { Alert, Col, Container, Image, Row } from "react-bootstrap";
import { priceFormatted } from "../../utilities"
import { addQuantity } from '../../redux/state/cart';
import { useCounter } from '../../hooks/useCounter';
import { GoBack } from '../../components/goBack';
import style from "./style.module.css";
import clx from 'classnames';
import Counter from '../../components/counter/Counter';
import Loading from '../../components/loading/Loading';
import CustomButton from '../../components/button/CustomButton';

const ProductDetail = () => {
  const { id } = useParams();
  const { isLoading } = useProductById(id);
  const { count, incrementAmount, decrementAmount } = useCounter();
  const { selectedProduct } = useSelector(selectProduct);
  const dispatch = useDispatch();

  const outStock = selectedProduct?.stock === 0 || count > selectedProduct?.stock;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const handleAdd = () => {
    dispatch(addQuantity({ id: selectedProduct.id, quantity: count, product: selectedProduct }));
  }

  if (isLoading) return <Loading />

  return (
    <Fragment>
      <GoBack />
      {selectedProduct !== null ?
        <Container className='d-flex justify-content-center align-items-center mt-5'>
          <Row className="d-flex justify-content-center align-items-center ">
            <Col
              sm={4}
            >
              <Image className={clx(style.object_fit, style.image_product)} src={selectedProduct.image !== "" ? selectedProduct.image : ""} height="300"></Image>
            </Col>
            <Col sm={7}>
              <h2 className={style.title_product}>{selectedProduct.title}</h2>
              <span className={style.price_formatted}>{priceFormatted(selectedProduct.price)}</span>
              <p className={style.short_description}>{selectedProduct.shortDescription}</p>
              <p className={style.large_description}>{selectedProduct.largeDescription}</p>
              <br />

              <div className='d-flex justify-content-center align-items-center mt-3'>
                <CustomButton handleAdd={handleAdd} outStock={outStock} >
                  Agregar al carrito
                </CustomButton>
                <Counter
                  handleAddQuantity={incrementAmount}
                  handleSubtractQuantity={decrementAmount}
                  product={selectedProduct}
                  currentAmount={count}
                />
              </div>
              <span className={clx('d-block mt-3', style.stock)}>
                ( {selectedProduct.stock} disponibles )
              </span>
            </Col>
          </Row>
        </Container>
        :
        <Row>
          <Col className='w-100 d-flex justify-content-center align-items-center'>
            <Alert className={clx(style.margin_top)} variant="danger">
              Se produjo un error al mostrar el producto seleccionado.
            </Alert>
          </Col>
        </Row>

      }
    </Fragment>
  )
}

export default ProductDetail
