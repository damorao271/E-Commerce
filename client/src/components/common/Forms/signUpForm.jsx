import React from "react";
import { saveUser } from "../../../services/userService";
import { Form, Button, Col, InputGroup } from "react-bootstrap";
import Formulario from "./form";
import Input from "./input";
import Joi from "joi";

class SignUpForm extends Formulario {
  state = {
    data: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      address: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().trim().label("Name"),
    lastname: Joi.string().required().trim().label("Lastname"),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
    address: Joi.string().required().label("Address"),
  };

  // Esta parte debe ajustarse de a ceurdo a la logica de cada
  // formulario doSu bmit()

  doSubmit = async () => {
    try {
      const response = await saveUser(this.state.data);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      this.props.history.push("/");
      console.log(response);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <React.Fragment>
        <div className="form-container">
          <h1>Register</h1>

          <div className="login-form col-6">
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <InputGroup>
                    <Input
                      name="name"
                      value={data.name}
                      label="Name"
                      type="text"
                      onChange={this.handleChange}
                      error={errors.name}
                      placeholder="Enter Name"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Lastname</Form.Label>

                  <Input
                    name="lastname"
                    value={data.lastname}
                    label="Lastname"
                    type="text"
                    onChange={this.handleChange}
                    error={errors.lastname}
                    placeholder="Enter Lastname"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Input
                      name="email"
                      value={data.email.trim()}
                      label="Email"
                      type="email"
                      onChange={this.handleChange}
                      error={errors.email}
                      placeholder="Enter Email"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>

                  <Input
                    name="password"
                    value={data.password.trim()}
                    label="Password"
                    type="password"
                    onChange={this.handleChange}
                    error={errors.password}
                    placeholder="Enter Password"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Group>
                    <Input
                      name="address"
                      value={data.address}
                      label="Address"
                      type="text"
                      onChange={this.handleChange}
                      error={errors.address}
                      placeholder="Enter Address"
                    />
                  </Form.Group>
                </Form.Group>
              </Form.Row>

              <Button
                // disabled={this.validate()}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUpForm;
