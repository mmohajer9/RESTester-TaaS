import { useState } from 'react';
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { commonActions } from '../../store/common';

const CreateTestPlan = (props) => {
  const common = useSelector((state) => state.common);
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState('');
  const [oasFile, setOasFile] = useState('');
  const [odgFile, setOdgFile] = useState('');
  const [numberOfTestCases, setNumberOfTestCases] = useState(1);
  const [useExample, setUseExample] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleOasChange = (e) => {
    const file = e.target.files[0];
    setOasFile(file);
  };
  const handleOdgChange = (e) => {
    const file = e.target.files[0];
    setOdgFile(file);
  };
  const handleNumberChange = (e) => {
    setNumberOfTestCases(e.target.value);
  };
  const handleUseExampleChange = (e) => {
    const state = e.target.checked;
    setUseExample(state);
  };

  const handleCreate = async () => {
    const values = {
      name,
      oasFile,
      odgFile,
      numberOfTestCases,
      useExample,
    };
    await dispatch(commonActions.createTestPlan(values, history));
  };

  return (
    <>
      <Modal
        show={common.isCreateOpen}
        onHide={() => dispatch(commonActions.closeCreateModal())}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a new test plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel className="my-2" controlId="name" label="Name">
                <Form.Control
                  onChange={handleNameChange}
                  type="text"
                  placeholder="Name"
                />
              </FloatingLabel>
              <Form.Group controlId="formFileOas" className="my-2">
                <Form.Label>Open API Specification File</Form.Label>
                <Form.Control onChange={handleOasChange} type="file" />
              </Form.Group>
              <Form.Group controlId="formFileOdg" className="my-3">
                <Form.Label>
                  Operation Dependency Graph File (Optional)
                </Form.Label>
                <Form.Control onChange={handleOdgChange} type="file" />
              </Form.Group>
              <Row className="gx-4 align-items-center">
                <Col xs={12} sm={6}>
                  <FloatingLabel
                    className="my-3 py-1"
                    controlId="numberOfTestCasesId"
                    label="Number of test cases"
                  >
                    <Form.Control
                      onChange={handleNumberChange}
                      type="number"
                      placeholder="Number of test cases"
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Group className="my-3" controlId="useExampleId">
                    <Form.Check
                      onChange={handleUseExampleChange}
                      checked={useExample}
                      type="checkbox"
                      label="Use Examples?"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => dispatch(commonActions.closeCreateModal())}
          >
            Close
          </Button>
          <Button variant="primary" onClick={() => handleCreate()}>
            Create test plan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateTestPlan;
