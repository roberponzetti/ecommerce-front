import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../firebase/Models/Auth/auth.service';
import { loginUser } from '../../redux/state/auth';
import { swalAlert } from '../../utilities/alert';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

const Login = () => {

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const loginResponse = await authLogin(form.email, form.password);

    if (loginResponse?.error) {
      setError(loginResponse.error);

    } else {
      const userCredencial = {
        displayName: loginResponse.user.displayName,
        email: loginResponse.user.email,
      }
      dispatch(loginUser(userCredencial));
      swalAlert("success", "Usuario logueado correctamente.");
      navigate('/');
    }
    setLoading(false)
  }

  const handleLogin = (event) => {
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
            <h2 className='mb-5'>Mi cuenta</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='p-2 px-3' type="email" name="email" placeholder="Ingresa tu email" onChange={handleLogin} required />
              </Form.Group>
              <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
                <Form.Control className='p-2 px-3' type="password" name="password" placeholder="Ingresa tu contraseña" onChange={handleLogin} required />
              </Form.Group>
              <div className='mt-5 d-flex flex-column justify-center align-items-center'>
                <Button className='px-5 py-2 w-100' variant="dark" type="submit">
                  {loading ?
                    <Spinner animation="border" role="status" variant="white" size="sm">
                      <span className="visually-hidden">cargando...</span>
                    </Spinner >
                    : 'Iniciar sesión'}
                </Button>
                <div className='d-flex align-items-center mt-3'>
                  <p className='p-0 w-100 me-3 text-muted'>¿No tenés cuenta?</p>
                  <Link className="py-2 w-50 text-decoration-none" type="button" to={'/Register'}>
                    Registrate
                  </Link>
                </div>

                {error && <p className="text-danger mt-3">{error}</p>}
              </div>
            </Form>
          </div >
        </Col>
      </Row>
    </Container>

  )
}

export default Login
