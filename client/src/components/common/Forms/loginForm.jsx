import React from "react";
import { Form, Button, Col, InputGroup } from "react-bootstrap";
import Formulario from "./form";
import Input from "./input";
import Joi from "joi";

class LoginForm extends Formulario {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
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
          <h1>Login</h1>
          <div className="login-form">
            <Form onSubmit={this.handleSubmit}>
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
              </Form.Row>

              <Form.Row>
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

              <Button
                disabled={this.validate()}
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

export default LoginForm;
