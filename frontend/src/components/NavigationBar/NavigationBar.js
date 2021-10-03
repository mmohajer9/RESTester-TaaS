import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container fluid="lg">
        <Navbar.Brand href="#home">RESTester Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Test Plans</Nav.Link>
            <Nav.Link href="#pricing">Test Suites</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="mmohajer9" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="text-danger" href="#action/3.4">
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
