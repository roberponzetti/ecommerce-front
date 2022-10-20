import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { authRegister } from '../../firebase/Models/Auth/auth.service';
import { swalAlert } from '../../utilities/alert';

const Register = () => {

  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden");
    } else {
      const registerUser = await authRegister(form.email, form.password);
      if (registerUser?.error) {
        setError(registerUser.error);
      } else {
        swalAlert("success", "Usuario registrado correctamente.");
        navigate('/login');
      }
    }
  }

  const handleRegister = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="container">
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleRegister} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" onChange={handleRegister} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" name="confirmPassword" placeholder="Confirm password" onChange={handleRegister} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Validar
        </Button>
        {error && <p className="text-danger">{error}</p>}
      </Form>
    </div >
  )
}

export default Register
