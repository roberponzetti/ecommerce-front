import React, { useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { authRegister } from '../../firebase/Models/Auth/auth.service';
import { swalAlert } from '../../utilities/alert';

const Register = () => {

  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden");
    } else {
      setLoading(true)
      const registerUser = await authRegister(form.email, form.password);
      if (registerUser?.error) {
        setError(registerUser.error);
      } else {
        swalAlert("success", "Usuario registrado correctamente.");
        navigate('/login');
      }
    }
    setLoading(false)
  }

  const handleRegister = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return (
    <Row className='d-flex justify-content-center'>
      <Col md={5}>
        <div className="container border p-5">
          <h2 className='my-5'>Creá tu cuenta</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='mb-3'>Email </Form.Label>
              <Form.Control className='p-3' type="email" name="email" placeholder="Email" onChange={handleRegister} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='mb-3'>Contraseña</Form.Label>
              <Form.Control className='p-3' type="password" name="password" placeholder="Contraseña" onChange={handleRegister} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label className='mb-3'>Confirmar contraseña</Form.Label>
              <Form.Control className='p-3' type="password" name="confirmPassword" placeholder="Confirmar contraseña" onChange={handleRegister} required />
            </Form.Group>
            <Button className='px-5 py-2 mt-3 w-100' variant="dark" type="submit">
              {loading ?
                <Spinner animation="border" role="status" variant="white" size="md">
                  <span className="visually-hidden">cargando...</span>
                </Spinner >
                : 'Registrarse'}
            </Button>
            {error && <p className="text-danger mt-3">{error}</p>}
          </Form>
        </div >
      </Col>
    </Row>

  )
}

export default Register
