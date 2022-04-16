import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleSubmit = event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  }

  const navigateRegister = event =>{
      navigate('/register');
  }

  return (
    <div className="container w-25 mx-auto">
      <h2 className="text-primary mt-2 text-center">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="w-100 mb-2" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p onClick={navigateRegister}>New to RED ONION? <Link className="text-danger text-center text-decoration-none pe-auto" to="/register">Please SignUp</Link></p>
    </div>
  );
};

export default Login;
