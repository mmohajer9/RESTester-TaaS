import { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { commonActions } from '../../store/common';

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
  const { testPlans } = useSelector((state) => state.common);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commonActions.getTestPlans());
  }, [dispatch]);

  return (
    <Container>
      <h1 className="my-3">Test Plans</h1>
      <Row className="gy-3">
        {testPlans.length === 0 ? (
          <Alert variant="warning">No test plans has been created yet.</Alert>
        ) : null}
        {testPlans.map((item, index) => (
          <TestPlan key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default TestPlans;
