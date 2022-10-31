import { Col, Image, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function SuccessModal(props) {

  return (
    <Modal size="lg" show={props.show} onHide={props.toggle}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome, {props.values.name}!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <p>Age: {props.values.age}</p>
            <p>Breed: {props.values.breed}</p>
            <p>Insurance: {props.insurance}</p>
          </Col>
          <Col>
            <Image fluid src={props.values.image}></Image>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default SuccessModal;
