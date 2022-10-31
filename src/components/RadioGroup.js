import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function RadioGroup(props) {
  return (
    <div className="d-grid">
      <ToggleButtonGroup name={props.name}>
        {props.radios.map((radio, idx) => ( // for each entry in props.radios, create a button
          <ToggleButton
            key={idx}
            id={`${props.name}-${idx}`}
            type="radio"
            variant="outline-secondary"
            name={radio.value}
            value={radio.value}
            checked={props.value === radio.value}
            onChange={(e) => props.setValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}

export default RadioGroup;
