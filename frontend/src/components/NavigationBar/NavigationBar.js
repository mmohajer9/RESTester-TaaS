import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from '../../common/routes';
import { authActions } from '../../store/auth';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <Navbar
      sticky="top"
      expanded={expanded}
      expand="md"
      bg="dark"
      variant="dark"
    >
      <Container fluid="lg">
        <Navbar.Brand as={NavLink} to={routes.dashboard}>
          RESTester Dashboard
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : true)}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => setExpanded(false)}
              as={NavLink}
              to={routes.testPlans}
            >
              Test Plans
            </Nav.Link>
            <Nav.Link
              onClick={() => setExpanded(false)}
              as={NavLink}
              to={routes.testSuites}
            >
              Test Suites
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="mmohajer9" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout} className="text-danger">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
