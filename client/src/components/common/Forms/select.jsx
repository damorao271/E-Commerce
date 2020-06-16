import React, { Component } from "react";

class Select extends Component {
  render() {
    const { label, error, options, onChange } = this.props;
    // console.log("Props:", this.props);

    return (
      <div className="form-group">
        <select
          name={label}
          id={label}
          onChange={onChange}
          className="form-control"
        >
          <option value=""></option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default Select;
