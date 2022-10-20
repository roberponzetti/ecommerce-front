import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../firebase/Models/Auth/auth.service';
import { loginUser } from '../../redux/state/auth';
import { swalAlert } from '../../utilities/alert';

const Login = () => {

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginResponse = await authLogin(form.email, form.password);
    if (loginResponse?.error) {
      setError(loginResponse.error);
    } else {
      dispatch(loginUser(loginResponse.user));
      swalAlert("success", "Usuario logueado correctamente.");
      navigate('/');
    }
  }

  const handleLogin = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleLogin} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" onChange={handleLogin} required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
        <Button className="ms-5" variant="primary" type="button" onClick={() => navigate('/Register')} >
          Registrarse
        </Button>
        {error && <p className="text-danger">{error}</p>}
      </Form>
    </div >
  )
}

export default Login
