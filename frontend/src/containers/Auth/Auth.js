import { useState } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

import authBg from '../../assets/authBg.png';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

const Auth = (props) => {
  const [authMode, setAuthMode] = useState('login');

  return (
    <>
      <Container className="min-vh-100 d-flex flex-column justify-content-center">
        <Row className="shadow shadow-lg justify-content-center py-5">
          <Col xs={12} className="text-center"></Col>
          <Col
            className="border-bottom border-md-right border-md-bottom-0 d-flex align-items-center mb-5 py-5"
            xs={10}
            md={5}
          >
            <Image alt="auth-img" src={authBg} fluid />
          </Col>
          <Col xs={12} md={6} className="mx-md-3">
            {authMode === 'login' ? (
              <Login setAuthMode={setAuthMode} />
            ) : authMode === 'register' ? (
              <Register setAuthMode={setAuthMode} />
            ) : null}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Auth;
