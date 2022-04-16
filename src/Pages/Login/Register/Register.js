import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }

  return (
    <div className="container w-25 mx-auto">
      <h2 className="text-primary mt-2 text-center">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit" value="Register">
          SignUp
        </Button>
      </Form>
      <p onClick={navigateLogin}>Already have an account? <Link className="text-danger text-center text-decoration-none pe-auto" to="/login">Please Login</Link></p>
    </div>
  );
};

export default Register;
