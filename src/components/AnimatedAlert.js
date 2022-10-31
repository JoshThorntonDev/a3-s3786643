import Alert from "react-bootstrap/Alert";
import Collapse from "react-bootstrap/Collapse";
import PropTypes from "prop-types";

/**
 * Animated error message for when a user submits an invalid form
 */
function AnimatedAlert(props) {
  return (
    <Collapse in={props.display}>
      <div>
        <Alert variant="danger">{props.message}</Alert>
      </div>
    </Collapse>
  );
}

AnimatedAlert.propTypes = {
  /**
   * Controls if the alert is visible or not
   */
  display: PropTypes.bool,

  /**
   * Message to be displayed inside the alert, or can be untruthy to not show
   */
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default AnimatedAlert;
