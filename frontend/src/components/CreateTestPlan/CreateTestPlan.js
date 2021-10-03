import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { commonActions } from '../../store/common';

const CreateTestPlan = (props) => {
  const common = useSelector((state) => state.common);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        show={common.isCreateOpen}
        onHide={() => dispatch(commonActions.closeCreateModal())}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => dispatch(commonActions.closeCreateModal())}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => dispatch(commonActions.closeCreateModal())}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateTestPlan;
