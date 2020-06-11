import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <FontAwesomeIcon
          className="sc-icon"
          icon={["fab", "facebook-square"]}
        />
        <FontAwesomeIcon className="sc-icon" icon={["fab", "instagram"]} />
        <FontAwesomeIcon className="sc-icon" icon={["fab", "twitter"]} />
        <FontAwesomeIcon className="sc-icon" icon={["fab", "whatsapp"]} />
        <FontAwesomeIcon className="sc-icon" icon={["fab", "linkedin"]} />
        <FontAwesomeIcon className="sc-icon" icon={["fab", "spotify"]} />
      </React.Fragment>
    );
  }
}

export default Footer;
