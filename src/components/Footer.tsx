import React from "react";
import { Link } from "react-router-dom";
import constants from "./constants";

import twitterIcon from "../img/social-media-svg/twitter.png";
import instagramIcon from "../img/social-media-svg/instagram.png";
import facebookIcon from "../img/social-media-svg/facebook.png";
import linkedinIcon from "../img/social-media-svg/linkedin-logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__inner footer__navigation">
        <div className="footer__brand div__brand">
          <Link to="/">
            <img
              className="footer__brand__img"
              src={constants.COMPANY_SEAL}
              alt={constants.COMPANY_TITLE}
            />
          </Link>
          <p>{constants.COMPANY_TITLE}</p>
        </div>
        <div className="footer__links">
          <Link to="/about">Who We Are</Link> |
          <Link to="/services">What We Do</Link> |
          <Link to="/experience">Our Experience</Link> |
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer__contact">
          <p>
            1730 Rhode Island Ave NW - Suite 816 <br />
            Washington, DC, 20036
            <br />
            <a href={`tel:+${constants.COMPANY_PHONE}`}>
              {"📞"}
              {constants.COMPANY_PHONE}
            </a>{" "}
            <br />
            <a href={`fax:+${constants.COMPANY_FAX}`}>
              {"📠"}
              {constants.COMPANY_FAX}
            </a>{" "}
            <br />
            <a
              href={`mailto:${constants.COMPANY_EMAIL}?subject=ClientQuestion`}
            >
              {constants.COMPANY_EMAIL}
            </a>{" "}
            <br />
          </p>
        </div>
      </div>
      <div className="footer__inner footer__logistics">
        <div className="footer__copyright">
          <p>
            © 2019 Copyright:
            <a href={constants.COMPANY_WEBSITE}>
              {" "}
              {constants.COMPANY_TITLE}
            </a>{" "}
            All Rights Reserved.
          </p>
        </div>
        <div className="footer__socialmedia">
          <a href="https://twitter.com/">
            <img className="footer_icon" src={twitterIcon} alt="twitter" />
          </a>
          <a href="https://www.instagram.com/">
            <img className="footer_icon" src={instagramIcon} alt="instagram" />
          </a>
          <a href="https://www.facebook.com/">
            <img className="footer_icon" src={facebookIcon} alt="facebook" />
          </a>
          <a href="https://www.linkedin.com/">
            <img className="footer_icon" src={linkedinIcon} alt="linked in" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
