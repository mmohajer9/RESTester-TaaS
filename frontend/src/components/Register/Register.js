import { Form, Button, FloatingLabel } from 'react-bootstrap';

const Register = (props) => {
  return (
    <Form>
      <Form.Group className="lead mb-3" controlId="formUsername">
        <FloatingLabel controlId="floatingInput" label="Username">
          <Form.Control type="username" placeholder="Username" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="lead mb-3" controlId="formBasicEmail">
        <FloatingLabel controlId="floatingInput" label="Email">
          <Form.Control type="email" placeholder="example@example.com" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="lead mb-3" controlId="formBasicPassword">
        <FloatingLabel controlId="floatingInput" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="lead mb-3" controlId="formBasicConfirmPassword">
        <FloatingLabel controlId="floatingInput" label="Confirm Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
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
