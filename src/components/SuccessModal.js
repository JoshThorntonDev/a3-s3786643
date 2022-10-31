import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function SuccessModal(props) {
  return (
    <Modal size="lg" show={props.show} onHide={props.toggle}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
            <Col>Name: {props.values.name}</Col>
            <Col><img src={props.values.image}></img></Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default SuccessModal;
