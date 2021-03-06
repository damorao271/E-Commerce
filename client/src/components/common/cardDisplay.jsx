import React, { Component } from "react";
import Card from "./card";
import { NavLink } from "react-router-dom";
import _ from "lodash";

class CardDisplay extends Component {
  render() {
    const { type, products, gender, counter, resetCounter } = this.props;

    return (
      <React.Fragment>
        {type === "all"
          ? products.map((p) => (
              <NavLink
                onClick={() => resetCounter(counter)}
                key={p.name}
                to={`/collections/${gender}/${type}/${p.name}/${p._id}`}
              >
                <Card key={p.name} name={p.name} price={p.price} />
              </NavLink>
            ))
          : _.filter(products, { type: type }).map((p) => (
              <NavLink
                onClick={() => resetCounter(counter)}
                key={p.name}
                to={`/collections/${gender}/${type}/${p.name}/${p._id}`}
              >
                <Card key={p.name} name={p.name} price={p.price} />
              </NavLink>
            ))}
      </React.Fragment>
    );
  }
}

export default CardDisplay;
