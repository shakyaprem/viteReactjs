import React from 'react';
import { NavLink } from "react-router-dom";
import { Button } from '../styles/Button';
import { FooterPad, FooterClass, Container } from '../styles/Styled.Components';
import { FaFacebook, FaTelegram, FaInstagram } from 'react-icons/fa'


const Footer = () => {
  return (
    <FooterPad>
    <FooterClass>
    <div className="footer-sort">
      <div className="sort-text">
        <p className="sort-para">
          ready to get started? talk to us today
        </p>
      </div>
      <div className="sort-btn">
        <Button className="sort-btn-get-started">
          get started
        </Button>
      </div>
    </div>
      <Container>
        <div className="col col-2 col-3 col-4">
          <h2 className="footer-heading">
            subscribe to get important update
          </h2>
          <form form action = 'https://formspree.io/f/xjvzbkol'
          method = 'POST'
          className = "footer-form" >
            <input type="email" name="Email" placeholder="Email" autoComplete="off" required={true} />
            <input type="submit" name="submit" value="subscribe" />
          </form>
        </div>
        <div className="col col-2 col-3 col-4">
          <h2 className="footer-heading">
            follow us
          </h2>
          <div className="footer-icons">
            <FaFacebook className="icons" />
            <FaTelegram className="icons" />
            <FaInstagram className="icons" />
          </div>
        </div>
        <div className="col col-2 col-3 col-4">
          <h2 className="footer-heading">
            call us
          </h2>
          <p className="footer-text">
            +91 98120 29029
          </p>
        </div>
        <div className="col col-2 col-3 col-4">
        <img src="/images/logo.jpg" alt="footer logo" className="footer-logo" />
          <p className="footer-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam cum assumenda iste quos molestias odio, quam quasi perspiciatis. Id deleniti saepe ducimus magni eum, autem cumque laboriosam!
          </p>
        </div>
      </Container>
      <hr className="line"></hr>
      <p className="text">
        &copy; { new Date().getFullYear() } technical shakya all rights reserved{" "}
        <NavLink className="link" to="/">terms of use</NavLink> |{" "}
        <NavLink className="link" to="/">privacy policy</NavLink>
      </p>
    </FooterClass>
    </FooterPad>
  );
};

export default Footer;