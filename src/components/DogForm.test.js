import { render, screen, fireEvent } from "@testing-library/react";
import DogForm from "./DogForm";

let container;

beforeEach(() => {
  const utils = render(<DogForm />);

  container = utils.container;
});

test("Component renders", () => {
  expect(container).toBeInTheDocument();
});

// ensures that all 8 radio buttons render
test("8 radio buttons", () => {
  expect(container.getElementsByClassName("btn-check").length).toBe(8);
});

// an error message should not be shown when component is first rendered
test("No error on render", () => {
  expect(container.getElementsByClassName("collapse show").length).toBe(0);
});


// the following tests ensure that the user is able to update the fields of the form
test("Can update name", () => {
  const name = screen.getByPlaceholderText("Pet's name");
  fireEvent.change(name, { target: { value: "TestName" } });
  expect(name.value).toBe("TestName");
});

test("Can update breed", () => {
  const breed = screen.getByPlaceholderText("Pet's breed");
  fireEvent.change(breed, { target: { value: "TestBreed" } });
  expect(breed.value).toBe("TestBreed");
});

test("Can update image", () => {
  const image = screen.getByPlaceholderText("URL to image of pet");
  fireEvent.change(image, { target: { value: "TestImage" } });
  expect(image.value).toBe("TestImage");
});

test("Can update birthday", () => {
  const birthday = screen.getByPlaceholderText("MM/DD/YYYY");
  fireEvent.change(birthday, { target: { value: "01/01/2000" } });
  expect(birthday.value).toBe("01/01/2000");
});
