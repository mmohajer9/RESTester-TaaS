import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const TestSuites = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TestSuites;
