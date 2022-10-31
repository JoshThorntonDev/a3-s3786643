import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CardImage } from "react-bootstrap-icons";
import RadioGroup from "./RadioGroup";
import { useEffect, useMemo, useState } from "react";
import AnimatedAlert from "./AnimatedAlert";
import SuccessModal from "./SuccessModal";
import { insertPet } from "../data/storage";
import { getAgeInYears } from "../data/getAge";
import { validate } from "../data/validate";

/**
 * Form to get user pet information and store in local storage
 */
function DogForm(props) {
  const [error, setError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);
  const toggleSuccess = () => {
    setShowSuccess((current) => !current);
  };

  const [values, setValues] = useState({
    name: "",
    image: "",
    breed: "",
    birthday: "",
    gender: "",
    status: "",
    weight: "",
  });

  const insurance = useMemo(
    // only recalculate insurance when weight or birthday changes
    () => {
      var total = 0;
      var age = getAgeInYears(values.birthday);

      if (age > 10) {
        return "No insurance offered";
      }

      if (values.weight === "100+lbs") {
        total += 50;
      }

      if (age <= 5) {
        total += 100;
      }

      if (age >= 6 && age <= 10) {
        total += 160;
      }

      return total;
    },

    [values.weight, values.birthday]
  );

  const handleInputChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  // these are used to generate three RadioGroup components with the correct button values
  const gendersArr = [
    { name: "Female", value: "female" },
    { name: "Male", value: "male" },
  ];
  const statusArr = [
    { name: "Spayed", value: "spayed" },
    { name: "Neutered", value: "neutered" },
  ];

  const weightArr = [
    { name: "0-25 lbs", value: "0-25lbs" },
    { name: "25-50 lbs", value: "25-50lbs" },
    { name: "50-100 lbs", value: "50-100lbs" },
    { name: "100+ lbs", value: "100+lbs" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false); // clear error in case user has set it already

    var result = validate(values);
    if (result !== "VALID") {
      setError(result);
    } else {
      // success
      setShowAlert(false);
      setShowSuccess(true);

      // save to storage
      insertPet(values, insurance);
    }
  };

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    }
  }, [error]);

  return (
    <Form onSubmit={handleSubmit}>
      <AnimatedAlert display={showAlert} message={error}></AnimatedAlert>
      <SuccessModal
        show={showSuccess}
        toggle={toggleSuccess}
        values={values}
        insurance={insurance}
      />
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={values.name}
              name="name"
              placeholder="Pet's name"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupImage">
            <Form.Label>
              <CardImage /> Image URL
            </Form.Label>
            <Form.Control
              type="text"
              name="image"
              placeholder="URL to image of pet"
              value={values.image}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupBreed">
            <Form.Label>Breed</Form.Label>
            <Form.Control
              type="text"
              name="breed"
              placeholder="Pet's breed"
              value={values.breed}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupBirthday">
            <Form.Label>Birthday</Form.Label>
            <Form.Control
              type="text"
              name="birthday"
              placeholder="MM/DD/YYYY"
              value={values.birthday}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupGender">
            <Form.Label>Gender</Form.Label>
            <RadioGroup
              name="gender"
              radios={gendersArr}
              value={values.gender}
              inputChange={handleInputChange}
              default={gendersArr[0].value}
            ></RadioGroup>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupStatus">
            <Form.Label>Spayed or Neutered</Form.Label>
            <RadioGroup
              name="status"
              radios={statusArr}
              value={values.status}
              inputChange={handleInputChange}
              default={statusArr[0].value}
            ></RadioGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupWeight">
            <Form.Label>Weight</Form.Label>
            <RadioGroup
              name="weight"
              radios={weightArr}
              value={values.weight}
              inputChange={handleInputChange}
              default={weightArr[0].value}
            ></RadioGroup>
          </Form.Group>
        </Col>
      </Row>
      <div className="text-end">
        <Button role={"submit"} type="submit" variant="success">
          Submit
        </Button>
      </div>
    </Form>
  );
}


export default DogForm;
