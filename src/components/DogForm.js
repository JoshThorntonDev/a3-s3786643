import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CardImage } from "react-bootstrap-icons";
import RadioGroup from "./RadioGroup";

function DogForm(props) {
  const genders = [
    { name: "Female", value: "female" },
    { name: "Male", value: "male" },
  ];
  const status = [
    { name: "Spayed", value: "spayed" },
    { name: "Neutered", value: "neutered" },
  ];

  const weight = [
    { name: "0-25 lbs", value: "0-25lbs" },
    { name: "25-50 lbs", value: "25-50lbs" },
    { name: "50-100 lbs", value: "50-100lbs" },
    { name: "100+ lbs", value: "100+lbs" },
  ];

  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Pet's name" />
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
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupBreed">
            <Form.Label>Breed</Form.Label>
            <Form.Control type="text" name="breed" placeholder="Pet's breed" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupBirthday">
            <Form.Label>Birthday</Form.Label>
            <Form.Control
              type="text"
              name="birthday"
              placeholder="MM/DD/YYYY"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupGender">
            <Form.Label>Gender</Form.Label>
            <RadioGroup name="gender" radios={genders}></RadioGroup>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupStatus">
            <Form.Label>Spayed or Neutered</Form.Label>
            <RadioGroup name="status" radios={status}></RadioGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupWeight">
            <Form.Label>Weight</Form.Label>
            <RadioGroup name="weight" radios={weight}></RadioGroup>
          </Form.Group>
        </Col>
      </Row>
      <Button type="submit" variant="success">
        Submit
      </Button>
    </Form>
  );
}

export default DogForm;
