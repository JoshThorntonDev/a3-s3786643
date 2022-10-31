import { getAgeInYears } from "./getAge";

function validate(values) {

  if (values.name === "") {
    return "Name is required";
  }

  if (values.breed === "") {
    return "Breed is required";
  }

  if (values.birthday === "") {
    return "Birthday is required";
  }

  if (Number.isNaN(getAgeInYears(values.birthday))) {
    // if an age cant be found, date is invalid
    return "Birthday is not in MM/DD/YYYY format";
  }

  if (values.breed.toUpperCase() !== values.breed) {
    return "Breed must be capitalised";
  }

  if (values.name.length > 20) {
    return "Name cannot exceed 20 characters";
  }

  return "VALID";
}

export { validate };
