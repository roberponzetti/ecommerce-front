import React, { useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { authRegister } from '../../../firebase/Models/Auth/auth.service';
import { swalAlert } from '../../../utilities/alert';
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import clx from 'classnames';
import style from '../style.module.css'
import { loginUser } from '../../../redux/state/auth';
import { useDispatch } from 'react-redux';

const Register = () => {

  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden");
    } else {
      setLoading(true);
      const registerUser = await authRegister(form.email, form.password, form.name);

      if (registerUser?.error) {
        setError(registerUser.error);
      } else {
        const userCredencial = {
          displayName: registerUser.user.displayName,
          email: registerUser.user.email,
        }
        dispatch(loginUser(userCredencial));
        swalAlert("success", "Usuario registrado correctamente.");
        navigate('/');
      }
    }
    setLoading(false);
  }

  const handleRegister = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }


  return (
    <Container>
      <Row className='d-flex justify-content-center'>
        <Col md={5}>
          <div className="container border p-5">
            <h2 className='mb-5'>Creá tu cuenta</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 position-relative" controlId="formBasicName">
                <BiUser className={clx('mb-2', style.icon__input)} />
                <Form.Control className={'p-2 px-5'} type="name" name="name" placeholder="Ingresa tu nombre" onChange={handleRegister} required />
              </Form.Group>
              <Form.Group className="mb-3  mt-4 position-relative" controlId="formBasicEmail">
                <AiOutlineMail className={clx('mb-2', style.icon__input)} />
                <Form.Control className='p-2 px-5' type="email" name="email" placeholder="Ingresa tu email" onChange={handleRegister} required />
              </Form.Group>
              <Form.Group className="mb-3 mt-4 position-relative" controlId="formBasicPassword">
                <BiLockAlt className={clx('mb-2', style.icon__input)} />
                <Form.Control className='p-2 px-5' type="password" name="password" placeholder="Ingresa tu contraseña" onChange={handleRegister} required />
              </Form.Group>
              <Form.Group className="mb-3 mt-4 position-relative" controlId="formBasicConfirmPassword">
                <BiLockAlt className={clx('mb-2', style.icon__input)} />
                <Form.Control className='p-2 px-5' type="password" name="confirmPassword" placeholder="Confirmá tu contraseña" onChange={handleRegister} required />
              </Form.Group>
              <Button className='px-5 py-2 mt-3 w-100' variant="dark" type="submit">
                {loading ?
                  <Spinner animation="border" role="status" variant="white" size="sm">
                    <span className="visually-hidden">cargando...</span>
                  </Spinner >
                  : 'Registrarse'}
              </Button>
              {error && <p className="text-danger mt-3">{error}</p>}
            </Form>
          </div >
        </Col>
      </Row>
    </Container>

  )
}

export default Register
