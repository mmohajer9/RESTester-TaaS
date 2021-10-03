import moment from 'moment';
import { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Alert,
  Spinner,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { commonActions } from '../../store/common';

const TestPlan = ({ data }) => {
  const created_at = moment(data.created_at).calendar();
  const updated_at = moment(data.updated_at).calendar();
  const { name, number_of_test_cases, use_example, id } = data;

  const dispatch = useDispatch();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const handleCreateTestSuite = async () => {
    setIsLoading(true);
    const values = { testPlanId: id };
    await dispatch(commonActions.createTestSuite(values, history));
    setIsLoading(false);
  };

  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <Card>
        <Card.Header>
          <Row>
            <Col xs={6}>Created at: {created_at}</Col>
            <Col xs={6}>Updated at: {updated_at}</Col>
          </Row>
        </Card.Header>

        <Card.Body>
          <Card.Title>
            #{id} - {name}
          </Card.Title>
          <hr />
          <Card.Text>Number of test cases : {number_of_test_cases}</Card.Text>
          <Card.Text>Using Examples : {`${use_example}`}</Card.Text>
          <Row className="gy-2">
            <Col xs={12} sm={6}>
              <Button
                onClick={handleCreateTestSuite}
                className="w-100"
                variant="primary"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  'Generate test suite'
                )}
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
          <TestPlan data={item} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default TestPlans;
