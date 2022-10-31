import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import PropTypes from "prop-types";
/**
 * For a given list of objects, returns a corresponding amount of radio inputs styled as buttons.
 * Only the prop 'default' is optional
 */
function RadioGroup(props) {
  return (
    <div className="d-grid">
      <ToggleButtonGroup defaultValue={props.default} name={props.name}>
        {props.radios.map(
          (
            radio,
            idx // for each entry in props.radios, create a button
          ) => (
            <ToggleButton
              key={idx}
              id={`${props.name}-${idx}`}
              type="radio"
              variant="outline-secondary"
              name={radio.value}
              value={radio.value}
              onChange={props.inputChange}
            >
              {radio.name}
            </ToggleButton>
          )
        )}
      </ToggleButtonGroup>
    </div>
  );
}

RadioGroup.propTypes = {
  /**
   * Value to be selected by default
   */
  default: PropTypes.string,

  /**
   * Name of RadioGroup, must be unique
   */
  name: PropTypes.string,

  /**
   * A function, recommended use is to update state elsewhere
   */
  inputChange: PropTypes.func,

  /**
   * A list of objects each with **name** and **value**, both as strings
   */
  radios: PropTypes.arrayOf(
    PropTypes.object
  ),
};

export default RadioGroup;
