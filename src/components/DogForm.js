import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CardImage } from "react-bootstrap-icons";
import RadioGroup from "./RadioGroup";
import { useState } from "react";

function DogForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [breed, setBreed] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [weight, setWeight] = useState("");

  const [error, setError] = useState(false);

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

    if (name === "") {
      setError("Name is required");
      return;
    }
    if (breed === "") {
      setError("Breed is required");
      return;
    }
    if (birthday === "") {
      setError("Birthday is required");
      return;
    }


    const [month, day, year] = birthday.split("/"); // get each part of the date to convert to standard

    const date = new Date(`${year}-${month}-${day}`); // create iso formatted date

    const timestamp = date.getTime(); // see if the date has a timestamp

    if (typeof timestamp !== "number" || Number.isNaN(timestamp)) {
      // if the timestamp is invalid then the date is also invalid
      setError("Date is not in MM/DD/YYYY format");
      return false;
    }

    if (breed.toUpperCase() !== breed) {
      setError("Breed must be capitalised");
      return;
    }

    if (name.length > 20) {
      setError("Name cannot exceed 20 characters");
      return;
    }

    if (!error) {
      console.log("no errors");
      // submit
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              name="name"
              placeholder="Pet's name"
              onChange={(event) => {
                if (event.target.value.length <= 20)
                  // prevent names greater than 20 characters
                  setName(event.target.value);
              }}
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
              value={image}
              onChange={(event) => {
                setImage(event.target.value);
              }}
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
              value={breed}
              onChange={(event) => {
                setBreed(event.target.value);
              }}
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
              value={birthday}
              onChange={(event) => {
                setBirthday(event.target.value);
              }}
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
              value={gender}
              setValue={setGender}
            ></RadioGroup>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupStatus">
            <Form.Label>Spayed or Neutered</Form.Label>
            <RadioGroup
              name="status"
              radios={statusArr}
              value={status}
              setValue={setStatus}
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
              value={weight}
              setValue={setWeight}
            ></RadioGroup>
          </Form.Group>
        </Col>
      </Row>
      <div className="text-end">
        <Button type="submit" variant="success">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default DogForm;
