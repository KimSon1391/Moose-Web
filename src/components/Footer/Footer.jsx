import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__content container">
        <Link className="logo" to="/">
          Moose
        </Link>
        <div className="footer__content__wrap">
          <div className="footer__content__list">
            <Link to="/">Audio and Subtitles</Link>
            <Link to="/">Media Center</Link>
            <Link to="/">Privacy</Link>
          </div>
          <div className="footer__content__list">
            <Link to="/">Audio Description</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Legal Notices</Link>
          </div>
          <div className="footer__content__list">
            <Link to="/">Help Center</Link>
            <Link to="/">Jobs</Link>
            <Link to="/">Cookies Preferences</Link>
          </div>
          <div className="footer__content__list">
            <Link to="/">Gift Cards</Link>
            <Link to="/">Term of Use</Link>
            <Link to="/">Corporate Infomation</Link>
          </div>
        </div>
        <div className="footer__content__social">
          <a href="https://www.facebook.com/Kimson123">
            <i className="bx bxl-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/km.sunnn/">
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a href="https://github.com/KimSon1391">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/kim-son-39b484217/">
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
