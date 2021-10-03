import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const TestSuite = () => {
  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <Card>
        <Card.Header>Test Suite #7</Card.Header>
        <Card.Body>
          <Card.Title>Pet Store Plan</Card.Title>
          <hr />
          <Card.Text>Created at 2021-09-20</Card.Text>
          <Card.Text>Updated at 2021-09-20</Card.Text>
          <Row className="gy-2">
            <Col xs={12} sm={6}>
              <Button className="w-100" variant="success">
                See Nominals
              </Button>
            </Col>
            <Col xs={12} sm={6}>
              <Button className="w-100" variant="danger">
                See Errors
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

const TestSuites = () => {
  return (
    <Container>
      <h1 className="my-3">Test Suites</h1>
      <Row className="gy-3">
        <TestSuite />
        <TestSuite />
        <TestSuite />
        <TestSuite />
      </Row>
    </Container>
  );
};

export default TestSuites;
