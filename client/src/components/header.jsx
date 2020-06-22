import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    const { counter, resetCounter, user } = this.props;

    return (
      <React.Fragment>
        <div className="sc-nav">
          <div className="col-8">
            <FontAwesomeIcon className="sc-icon" icon={["fab", "instagram"]} />
          </div>
          <div className="login-link col-1">
            <NavLink onClick={() => resetCounter(counter)} to="/productform">
              <h6>Product Form</h6>
            </NavLink>
          </div>
          {!user && (
            <React.Fragment>
              <div className="login-link col-1">
                <NavLink onClick={() => resetCounter(counter)} to="/signup">
                  <h5>
                    <FontAwesomeIcon className="sc-icon" icon="user" />
                  </h5>
                  <h6>SIGN UP</h6>
                </NavLink>
              </div>
              <div className="login-link col-1">
                <NavLink onClick={() => resetCounter(counter)} to="/login">
                  <h5>
                    <FontAwesomeIcon className="sc-icon" icon="user" />
                  </h5>
                  <h6>LOGIN</h6>
                </NavLink>
              </div>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <div className="login-link col-1">
                <NavLink onClick={() => resetCounter(counter)} to="/signup">
                  <h5>
                    <FontAwesomeIcon className="sc-icon" icon="user" />
                  </h5>
                  <h6>{user.name}</h6>
                </NavLink>
              </div>
              <div className="login-link col-1">
                <NavLink onClick={() => resetCounter(counter)} to="/logout">
                  <h5>
                    <FontAwesomeIcon className="sc-icon" icon="user" />
                  </h5>
                  <h6>LOGOUT</h6>
                </NavLink>
              </div>
            </React.Fragment>
          )}

          <div className="cart-counter col-1">
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
