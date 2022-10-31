import { render, screen, fireEvent } from "@testing-library/react";
import RadioGroup from "./RadioGroup";

let array;
let container;
let count = 0; // stores the index of the current test
let inputChange = () => {};

beforeEach(() => {
  array = [
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
  ];
  if (count === 2) { // on the third test, add another button
    array.push({ name: "4", value: "4" });
  }

  const utils = render(
    <RadioGroup
      name={"test"}
      radios={array}
      default={"1"}
      inputChange={inputChange}
    ></RadioGroup>
  );

  container = utils.container;

  count += 1;
});

// check that the component renders when given valid props
test("Component renders", () => {
  expect(container).toBeInTheDocument();
});

// check that there are only 3 buttons
test("3 buttons", () => {
  expect(container.getElementsByClassName("btn-check").length).toBe(3);
});

// check that another button has been added, as this component needs to used to generate varying amounts of radio buttons
test("4 buttons", () => {
  expect(container.getElementsByClassName("btn-check").length).toBe(4);
});

// check that the button with value '1' is selected by default
// this prevents the user from submitting the form without this value, as once a radio group has been set,
// a value will always be selected
test("1 is selected", () => {
  const button = screen.getByDisplayValue("1");

  expect(button).toHaveAttribute("checked");
});

// check that other buttons arent checked
// buttons other than the default shouldnt be checked at first
// essentially tests that the buttons are rendering as radios rather then some other input
test("Others arent checked", () => {
  const button2 = screen.getByDisplayValue("2");
  const button3 = screen.getByDisplayValue("3");

  expect(button2).not.toBeChecked();
  expect(button3).not.toBeChecked();
});

// checking button2 should uncheck button1
// also ensures that the group renders as radio, as the user mustnt be able to select more than 1 option
test("Selecting 2 deselects 1", () => {
  const button1 = screen.getByDisplayValue("1");
  const button2 = screen.getByDisplayValue("2");

  fireEvent.click(button2);

  expect(button1).not.toBeChecked();
  expect(button2).toBeChecked();
});
