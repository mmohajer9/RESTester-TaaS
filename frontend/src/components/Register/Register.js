import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { authActions } from '../../store/auth';

const Register = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    dispatch(authActions.register(values, history));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="lead mb-2" controlId="formUsername">
        <FloatingLabel className="py-1" controlId="usernameInputId" label="Username">
          <Form.Control onChange={handleUsernameChange} type="text" placeholder="Username" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="lead mb-3" controlId="formBasicEmail">
        <FloatingLabel className="py-1" controlId="emailInputId" label="Email">
          <Form.Control onChange={handleEmailChange} type="email" placeholder="example@example.com" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="lead mb-3" controlId="formBasicPassword">
        <FloatingLabel className="py-1" controlId="passwordInputId" label="Password">
          <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="lead mb-3" controlId="formBasicConfirmPassword">
        <FloatingLabel
          controlId="confirmPasswordInputId"
          label="Confirm Password"
        >
          <Form.Control onChange={handleConfirmPasswordChange} type="password" placeholder="Password" />
        </FloatingLabel>
      </Form.Group>
      <div className="d-grid gap-2">
        <Button type="submit" variant="success" size="lg">
          Submit
        </Button>
      </div>
      <hr />
      <h6 className="my-3">Already have an account? </h6>
      <div className="d-grid gap-2 mb-2 mt-2">
        <Button
          onClick={() => props.setAuthMode('login')}
          variant="primary"
          size="lg"
        >
          Login
        </Button>
      </div>
    </Form>
  );
};

export default Register;
