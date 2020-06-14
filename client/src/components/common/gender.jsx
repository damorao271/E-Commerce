import React, { Component } from "react";
import CardDisplay from "./cardDisplay";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { NavLink, Switch, Route } from "react-router-dom";
import _ from "lodash";

class Gender extends Component {
  render() {
    let { products, gender, colors, types, counter, resetCounter } = this.props;

    // products = _.uniqBy(products, "name");
    products = _.filter(_.uniqBy(products, "name"), { gender: gender });

    return (
      <div className="gender-container">
        <div className="gender-img">
          <h5>{gender}</h5>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-3 col-md-3">
            <DropdownButton title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <ul>
              {_.filter(types, { gender: gender }).map((t) => (
                <NavLink key={t._id} to={`/collections/${gender}/${t.type}`}>
                  <li>{t.type}</li>
                </NavLink>
              ))}
            </ul>
            <ul>
              {colors.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="card-display col-sm-12 col-md-9 col-lg-9">
            <Switch>
              {_.filter(types, { gender: gender }).map((t) => (
                <Route
                  key={t.type}
                  path={`/collections/${gender}/${t.type}`}
                  render={(props) => (
                    <CardDisplay
                      counter={counter}
                      resetCounter={resetCounter}
                      gender={gender}
                      products={products}
                      type={t.type}
                    />
                  )}
                />
              ))}
              <Route
                path={`/collections/${gender}`}
                render={(props) => (
                  <CardDisplay
                    counter={counter}
                    resetCounter={resetCounter}
                    gender={gender}
                    products={products}
                    type="all"
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Gender;
