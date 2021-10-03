import { Form, Button } from 'react-bootstrap';

const Register = (props) => {
  return (
    <Form>
      <Form.Group className="lead mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>
      <Form.Group className="lead mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="lead mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="lead mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="success" size="lg">
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
