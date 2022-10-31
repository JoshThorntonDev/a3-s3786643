import Alert from "react-bootstrap/Alert";
import Collapse from "react-bootstrap/Collapse";

function AnimatedAlert(props) {
  return (
    <Collapse in={props.display}>
      <div>
        <Alert variant="danger">{props.message}</Alert>
      </div>
    </Collapse>
  );
}

export default AnimatedAlert;
