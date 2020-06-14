import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    const { counter, resetCounter } = this.props;

    return (
      <React.Fragment>
        <div className="sc-nav">
          <div>
            <FontAwesomeIcon className="sc-icon" icon={["fab", "instagram"]} />
          </div>
          <div>
            <NavLink onClick={() => resetCounter(counter)} to="/login">
              <h5>
                <FontAwesomeIcon className="sc-icon" icon="user" />
              </h5>
              <h6>LOGIN</h6>
            </NavLink>
          </div>
          <div>
            <FontAwesomeIcon className="sc-icon" icon="shopping-bag" />
            <h6>{counter}</h6>
          </div>
        </div>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <div>
                <NavLink onClick={() => resetCounter(counter)} to="/">
                  <h5>HOME</h5>
                </NavLink>
              </div>
              <div>
                <NavLink
                  onClick={() => resetCounter(counter)}
                  to="/collections/men"
                >
                  <h5>MEN</h5>
                </NavLink>
              </div>
              <div>
                <NavLink
                  onClick={() => resetCounter(counter)}
                  to="/collections/women"
                >
                  <h5>WOMEN</h5>
                </NavLink>
              </div>

              <div>
                <NavLink
                  onClick={() => resetCounter(counter)}
                  to="/collections/unisex"
                >
                  <h5>UNISEX</h5>
                </NavLink>
              </div>

              <div>
                <NavLink
                  onClick={() => resetCounter(counter)}
                  to="/collections/troops"
                >
                  <h5>TROOPS</h5>
                </NavLink>
              </div>
              <div>
                <NavLink
                  onClick={() => resetCounter(counter)}
                  to="/collections/souvenirs"
                >
                  <h5> SOUVENIRS </h5>
                </NavLink>
              </div>
              <div>
                <NavLink
                  onClick={() => resetCounter(counter)}
                  to="/collections/sales"
                >
                  <h5>SALES</h5>
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
