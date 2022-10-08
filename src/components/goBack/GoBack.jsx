import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import style from "./style.module.css";
import clx from 'classnames';

const GoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);

  return (
    <Row className='container'>
      <Col className={style.container_button}>
        <button className={clx(style.button_goback, "d-flex align-items-center justify-content-center")} onClick={handleGoBack}>
          <IoIosArrowBack size={18} />
          Volver
        </button>
      </Col>
    </Row>
  )
}

export default GoBack
