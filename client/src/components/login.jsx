import React, { Component } from "react";
import { Form, Button, Col, InputGroup } from "react-bootstrap";

class Login extends Component {
  state = {
    account: { username: "", email: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //Call Serer

    console.log("Submitted", this.state.account.username);
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    console.log("State:", this.state);
    const { account } = this.state;
    return (
      <React.Fragment>
        <div className="form-container">
          <div id="login-form">
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridUser">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="username"
                    value={account.username}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Enter Name"
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
                    <Form.Control
                      name="email"
                      value={account.email}
                      onChange={this.handleChange}
                      type="email"
                      placeholder="Enter Email"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Pasword</Form.Label>
                  <Form.Control
                    name="password"
                    value={account.password}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Enter password"
                  />
                </Form.Group>
              </Form.Row>

              <Button variant="primary" type="submit">
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
