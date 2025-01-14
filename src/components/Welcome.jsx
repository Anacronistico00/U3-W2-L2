import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

function Welcome() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='fs-2 fw-bolder text-black'>
            Welcome To My Library!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Feel free to search and inform about any book in this list
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Welcome;
