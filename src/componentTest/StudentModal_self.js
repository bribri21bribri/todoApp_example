import React from 'react'
import {Container,
  Row,
  Col,
  Button,
  ButtonToolbar,
  InputGroup,
  FormControl,
  Table,
  ButtonGroup,
  Modal,
  Form
} from 'react-bootstrap'
 function StudentModal_self(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          Modal Heading
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>ID</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Birth</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
export default StudentModal_self