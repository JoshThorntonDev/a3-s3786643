import { Col, Image, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function SuccessModal(props) {

const getAgeInYears = () => {
    var milliseconds = new Date() - new Date(props.values.utcBirthday)

    return Math.floor(milliseconds/1000/60/60/24/365);
}

  return (
    <Modal size="lg" show={props.show} onHide={props.toggle}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome, {props.values.name}!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <p>Age: {getAgeInYears()}</p>
            <p>Breed: {props.values.breed}</p>
            <p>Insurance: {props.values.insurance}</p>
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
