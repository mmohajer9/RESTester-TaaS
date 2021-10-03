import moment from 'moment';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commonActions } from '../../store/common';

const TestSuite = ({ data }) => {
  const created_at = moment(data.created_at).calendar();
  const updated_at = moment(data.updated_at).calendar();
  const { result_error, result_nominal, id, test_plan_name } = data;

  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <Card>
        <Card.Header>Test Suite #{id}</Card.Header>
        <Card.Body>
          <Card.Title>Test plan : {test_plan_name}</Card.Title>
          <hr />
          <Card.Text>Created at {created_at}</Card.Text>
          <Card.Text>Updated at {updated_at}</Card.Text>
          <Row className="gy-2">
            <Col xs={12} sm={6}>
              <Button
                target="_blank"
                href={result_nominal}
                className="w-100"
                variant="success"
              >
                See Nominals
              </Button>
            </Col>
            <Col xs={12} sm={6}>
              <Button
                target="_blank"
                href={result_error}
                className="w-100"
                variant="danger"
              >
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
  const dispatch = useDispatch();
  const { testSuites } = useSelector((state) => state.common);

  useEffect(() => {
    dispatch(commonActions.getTestSuites());
  }, [dispatch]);

  return (
    <Container>
      <h1 className="my-3">Test Suites</h1>
      <Row className="gy-3">
        {testSuites.length === 0 ? (
          <Alert variant="warning">No test suites has been created yet.</Alert>
        ) : null}
        {testSuites.map((item, index) => (
          <TestSuite data={item} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default TestSuites;
