import React, { Component } from "react";

class Card extends Component {
  render() {
    const { name, price } = this.props;

    return (
      <React.Fragment>
        <div className="card-container">
          <img
            className="d-block h-20"
            src="https://via.placeholder.com/200x200"
            alt="First slide"
          />
          <h4>{name}</h4>
          <h6>${price}.00</h6>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
