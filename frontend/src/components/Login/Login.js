import { Form, Button } from 'react-bootstrap';

const Login = (props) => {


  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="lead">Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="lead">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Login
        </Button>
      </div>
      <hr></hr>
      <h6 className="">Don't have an account? </h6>
      <div className="d-grid gap-2 mb-2 mt-2">
        <Button onClick={() => props.setAuthMode('register')} variant="success" size="lg">
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
