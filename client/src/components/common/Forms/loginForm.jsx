import React from "react";
import { Form, Button, Col, InputGroup } from "react-bootstrap";
import Formulario from "./form";
import Input from "./input";
import Joi from "joi";
import auth from "../../../services/authService";
import { Redirect } from "react-router-dom";

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

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
      // this.props.history.push("/");// No genera full reload
      // window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        let errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { data, errors } = this.state;

    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <React.Fragment>
        <div className="form-container">
          <h1>Login</h1>
          <div className="login-form col-4">
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

export default LoginForm;
