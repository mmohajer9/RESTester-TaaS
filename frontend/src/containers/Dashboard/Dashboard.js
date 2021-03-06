import { Col, Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileCode,
  faVial,
  faPlusCircle,
  // faHistory,
} from '@fortawesome/free-solid-svg-icons';
import CreateTestPlan from '../../components/CreateTestPlan/CreateTestPlan';
import { useDispatch } from 'react-redux';
import { commonActions } from '../../store/common';
import { useHistory } from 'react-router';
import routes from '../../common/routes';

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      
      <Container>
        <Row className="mt-4 g-2 justify-content-around">
          <Col
            as={Button}
            variant="outline-dark"
            onClick={() => history.push(routes.testPlans)}
            className="text-center border py-3 me-1 mb-3"
            xs={12}
            sm={6}
            md={3}
            lg={2}
          >
            <FontAwesomeIcon
              color="#4352f2"
              className="mb-3"
              icon={faVial}
              size="7x"
            />
            <p className="lead">Test Plans</p>
          </Col>
          <Col
            as={Button}
            onClick={() => history.push(routes.testSuites)}
            variant="outline-dark"
            className="text-center border py-3 me-1 mb-3"
            xs={12}
            sm={6}
            md={3}
            lg={2}
          >
            <FontAwesomeIcon
              color="#dbcb1c"
              className="mb-3"
              icon={faFileCode}
              size="7x"
            />
            <p className="lead">Test Suites</p>
          </Col>
          <Col
            as={Button}
            onClick={() => dispatch(commonActions.openCreateModal())}
            variant="outline-dark"
            className="text-center border py-3 me-1 mb-3"
            xs={12}
            sm={6}
            md={3}
            lg={2}
          >
            <FontAwesomeIcon
              color="#009666"
              className="mb-3"
              icon={faPlusCircle}
              size="7x"
            />
            <p className="lead">Create a new test plan</p>
          </Col>
        </Row>
      </Container>
      <CreateTestPlan />
    </>
  );
};

export default Dashboard;
