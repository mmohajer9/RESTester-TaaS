import { useState } from 'react';
import { Form, Button, FloatingLabel, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { authActions } from '../../store/auth';

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('pass');
  const [isLoading, setIsLoading] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const values = {
      usernameOrEmail: username,
      password: password,
    };
    await dispatch(authActions.login(values, history));
    setIsLoading(false);
  };

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="lead mb-3" controlId="formBasicEmail">
        <FloatingLabel
          className="py-1"
          controlId="usernameInputId"
          label="Username or Email"
        >
          <Form.Control
            onChange={handleUsernameChange}
            type="text"
            placeholder="Username or Email"
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="lead mb-3" controlId="formBasicPassword">
        <FloatingLabel
          className="py-1"
          controlId="passwordInputId"
          label="Password"
        >
          <Form.Control
            onChange={handlePasswordChange}
            type="password"
            placeholder="Password"
          />
        </FloatingLabel>
      </Form.Group>
      <div className="d-grid gap-2">
        <Button disabled={isLoading} variant="primary" size="lg" type="submit">
          {isLoading ? (
            <Spinner
              as="span"
              animation="border"
              size="md"
              role="status"
              aria-hidden="true"
            />
          ) : (
            'Login'
          )}
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
