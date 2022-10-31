import { Col, Image, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { getAgeInYears } from "../data/getAge";
import PropTypes from "prop-types";

/**
 * Full screen success message that lists pet information.
 *
 * Uses **Modal**, **Col**, **Image** and **Row** from 'react-bootstrap'
 */
function SuccessModal(props) {
  return (
    <Modal size="lg" show={props.show} onHide={props.toggle}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome, {props.values.name}!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <p>Age: {getAgeInYears(props.values.birthday)}</p>
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

SuccessModal.propTypes = {
  /**
   * Controls whether the modal is currently shown or not
   */
  show: PropTypes.bool.isRequired,

  /**
   * Function that toggles the state of **show** prop
   */
  toggle: PropTypes.func.isRequired,

  /**
   * Object that stores values to be displayed
   */
  values: PropTypes.shape({
    name: PropTypes.string,
    birthday: PropTypes.string,
    breed: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,

  /**
   * Number equal to annual cost of insurance in dollars, or a message such as 'No insurance offered'
   */
  insurance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default SuccessModal;
