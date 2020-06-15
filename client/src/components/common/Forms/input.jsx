import React, { Component } from "react";
import { Form } from "react-bootstrap";

class Input extends Component {
  render() {
    const { name, value, onChange, placeholder, error, type } = this.props;

    return (
      <React.Fragment>
        <Form.Control
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </React.Fragment>
    );
  }
}

export default Input;
