import { Col, Container, Row, Button } from 'react-bootstrap';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileCode,
  faVial,
  faPlusCircle,
  faHistory,
} from '@fortawesome/free-solid-svg-icons';

const Dashboard = (props) => {
  return (
    <>
      <NavigationBar />
      <Container>
        <Row className="mt-4 g-2 justify-content-around">
          <Col
            as={Button}
            variant="outline-dark"
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
            <p className="lead">Create new test plan</p>
          </Col>
          <Col
            as={Button}
            variant="outline-dark"
            className="text-center border py-3 me-1 mb-3"
            xs={12}
            sm={6}
            md={3}
            lg={2}
          >
            <FontAwesomeIcon
              color="#8432ef"
              className="mb-3"
              icon={faHistory}
              size="7x"
            />
            <p className="lead">History</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
