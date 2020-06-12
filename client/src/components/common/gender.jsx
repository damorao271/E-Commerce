import React, { Component } from "react";
import Card from "./card";

class Gender extends Component {
  state = {};

  render() {
    const title = this.props.match.params.gender;

    return (
      <div className="gender-container">
        <div>
          <h5>{title}</h5>
        </div>
        <Card />
      </div>
    );
  }
}

export default Gender;
