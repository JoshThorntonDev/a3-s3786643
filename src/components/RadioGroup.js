import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function RadioGroup(props) {
  return (
    <div className="d-grid">
      <ToggleButtonGroup defaultValue={props.default} name={props.name}>
        {props.radios.map((radio, idx) => ( // for each entry in props.radios, create a button
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
        ))}
      </ToggleButtonGroup>
    </div>
  );
}

export default RadioGroup;
