import React, { Component } from "react";
import { Form, Button, Col, InputGroup } from "react-bootstrap";
import Formulario from "./common/Forms/form";
import Input from "./common/Forms/input";
import Joi from "joi";

class Login extends Formulario {
  state = {
    data: { username: "", email: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().min(5).trim().label("Username"),
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
  };

  // Esta parte debe ajustarse de a ceurdo a la logica de cada
  // formulario doSu bmit()

  doSubmit = () => {
    if (this.validate()) {
      console.log("CANT SUBMIT !! ");

      // Validar que el usuario sea unico en el server
    } else {
      console.log("Submitted", this.state.data);
    }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <React.Fragment>
        <div className="form-container">
          <div id="login-form">
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridUser">
                  <Form.Label>Username</Form.Label>

                  <Form.Group>
                    <Input
                      name="username"
                      value={data.username}
                      label="Username"
                      type="text"
                      onChange={this.handleChange}
                      error={errors.username}
                      placeholder="Enter Username"
                    />
                  </Form.Group>
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
                      value={data.email}
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
                    value={data.password}
                    label="Password"
                    type="text"
                    onChange={this.handleChange}
                    error={errors.password}
                    placeholder="Enter Password"
                  />
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

export default Login;
