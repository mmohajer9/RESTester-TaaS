import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const TestPlan = () => {
  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <Card>
        <Card.Header>Created at 2021-09-20 - Updated at 2021-09-20</Card.Header>
        <Card.Body>
          <Card.Title>Pet Store Plan</Card.Title>
          <hr />
          <Card.Text>Number of test cases : 1</Card.Text>
          <Card.Text>Using Examples : True</Card.Text>
          <Row className="gy-2">
            <Col xs={12} sm={6}>
              <Button className="w-100" variant="primary">
                See test suites
              </Button>
            </Col>
            <Col xs={12} sm={6}>
              <Button className="w-100" variant="danger">
                Delete this plan
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

const TestPlans = () => {
  return (
    <Container>
      <h1 className="my-3">Test Plans</h1>
      <Row className="gy-3">
        <TestPlan />
        <TestPlan />
        <TestPlan />
        <TestPlan />
      </Row>
    </Container>
  );
};

export default TestPlans;
