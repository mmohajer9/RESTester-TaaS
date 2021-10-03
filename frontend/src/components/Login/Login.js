import { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { authActions } from '../../store/auth';

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('pass');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const values = {
      usernameOrEmail: username,
      password: password,
    };
    dispatch(authActions.login(values, history));
  };

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="lead mb-3" controlId="formBasicEmail">
        <FloatingLabel className="py-1" controlId="usernameInputId" label="Username or Email">
          <Form.Control
            onChange={handleUsernameChange}
            type="text"
            placeholder="Username or Email"
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="lead mb-3" controlId="formBasicPassword">
        <FloatingLabel className="py-1" controlId="passwordInputId" label="Password">
          <Form.Control
            onChange={handlePasswordChange}
            type="password"
            placeholder="Password"
          />
        </FloatingLabel>
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" type="submit">
          Login
        </Button>
      </div>
      <hr></hr>
      <h6 className="">Don't have an account? </h6>
      <div className="d-grid gap-2 mb-2 mt-2">
        <Button
          onClick={() => props.setAuthMode('register')}
          variant="success"
          size="lg"
        >
          Sign up
        </Button>
      </div>
      <h6 className="">Forgot your password? </h6>
      <div className="d-grid gap-2 my-3">
        <Button variant="dark" size="lg">
          Password Recovery
        </Button>
      </div>
    </Form>
  );
};

export default Login;
