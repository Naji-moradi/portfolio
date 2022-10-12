import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer bg-footer">
      <div className="container ">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>city vasco mes jucntion 2020 zoya house</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">(+91)8767367821</a>
            </div>
            <div className="d-flex">
              <p>akhtarmoradi303@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav n">
                  <Link
                    smooth={true}
                    to="home"
                    offset={-110}
                    className="nav-link n"
                  >
                    Home
                  </Link>
                </a>
                <br />
                <a className="footer-nav n">
                  <Link
                    smooth={true}
                    to="about"
                    offset={-110}
                    className="nav-link n"
                  >
                    About
                  </Link>
                </a>
                <br />
                <a className="footer-nav n">
                  <Link
                    smooth={true}
                    to="services"
                    offset={-110}
                    className="nav-link n"
                  >
                    Servicess
                  </Link>
                </a>
              </div>
              <div className="col">
                <a className="footer-nav n">
                  <Link
                    smooth={true}
                    to="experience"
                    offset={-110}
                    className="nav-link n"
                  >
                    Experience
                  </Link>
                </a>
                <br />
                <a className="footer-nav n">
                  <Link
                    smooth={true}
                    to="portfolio"
                    offset={-110}
                    className="nav-link n"
                  >
                    Portfolio
                  </Link>
                </a>
                <br />
                <a className="footer-nav n">
                  <Link
                    smooth={true}
                    to="contact"
                    offset={-110}
                    className="nav-link n"
                  >
                    Contact
                  </Link>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon
                  className="mx-3"
                  size={36}
                  style={{ borderRadius: "5px" }}
                />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon
                  className="mx-3"
                  size={36}
                  style={{ borderRadius: "5px" }}
                />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <RedditIcon
                  className="mx-3"
                  size={36}
                  style={{ borderRadius: "5px" }}
                />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon
                  className="mx-3"
                  size={36}
                  style={{ borderRadius: "5px" }}
                />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Vasco,Goa,India | All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
