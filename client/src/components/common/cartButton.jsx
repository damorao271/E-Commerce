import React, { Component } from "react";
import { Button } from "react-bootstrap";

class CardButton extends Component {
  render() {
    const {
      getObject,
      addToCart,
      increaseCounter,
      decreaseCounter,
      counter,
      products,
      id,
    } = this.props;

    return (
      <React.Fragment>
        <div className="card-button-container row">
          <div className="count-buttons">
            <Button onClick={() => decreaseCounter(counter)} variant="info">
              -
            </Button>
            <div>{counter}</div>
            <Button
              onClick={() => increaseCounter(products, id, counter)}
              variant="info"
            >
              +
            </Button>
          </div>
          <Button
            onClick={() => addToCart(products, id, counter)}
            variant="dark"
          >
            ADD TO CART
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default CardButton;
