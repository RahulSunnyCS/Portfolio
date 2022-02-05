import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faLinkedinIn,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { URLS, ICONS } from "../constants";
import "./styles.scss";
const IconContainer = (props) => {
  const { icon } = props;
  let { iconName, url } = {};
  switch (icon) {
    case ICONS.TWITTER:
      iconName = faTwitter;
      url = URLS.TWITTER;
      break;
    case ICONS.GITHUB:
      iconName = faGithub;
      url = URLS.GITHUB;
      break;
    case ICONS.LINKEDIN:
      iconName = faLinkedin;
      url = URLS.LINKEDIN;
      break;
    //no console
  }
  return (
    <div className="iconContainer">
      <FontAwesomeIcon
        icon={iconName}
        className={`icon ${iconName}`}
        onClick={() => {
          window.open(url, "_blank");
        }}
      />
    </div>
  );
};

export default IconContainer;
