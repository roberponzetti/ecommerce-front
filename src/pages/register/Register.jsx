import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN_FIREBASE,
  projectId: process.env.REACT_APP_PROJECT_ID_FIREBASE,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET_FIREBASE,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_KEY_FIREBASE,
  appId: process.env.REACT_APP_APP_ID_FIREBASE,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const Register = () => {

  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
    } else {
      console.log("entre");
      createUserWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
          console.log(userCredential);
          const user = userCredential.user;
          navigate('/login');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message);
        });
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
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
          Submit
        </Button>
      </Form>
    </div >
  )
}

export default Register
