import React, { Component } from "react";
import { Form, Button, Col, InputGroup } from "react-bootstrap";
import Input from "./common/input";
import Joi from "joi";

class Login extends Component {
  state = {
    data: { username: "", email: "", password: "" },
    errors: { username: "", email: "", password: "" },
  };

  schema = {
    username: Joi.string().required().min(5).trim().label("Username"),
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({
      errors: errors || { username: "", email: "", password: "" },
    });

    if (this.validate()) {
      console.log("CANT SUBMIT !! ");

      // Validar que el usuario sea unico en el server
    } else {
      console.log("Submitted");
    }
    if (errors) return;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (!errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value.trim();
    this.setState({ data, errors });
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
