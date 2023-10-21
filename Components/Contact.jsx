import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contract" className="contract_section small_pt">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 offset-lg-2">
            <div className="title-default_light title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Get In Touch
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-item-center small_space">
          <div className="col-lg-4 col-md-6 offset-lg-2">
            <div
              className="bg_light_dark contact_box_s2 animate"
              data-animation="fadeInUp"
              data-animation-delay="0.1s"
            >
              <div className="contact_title">
                <h5
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Contact With Us
                </h5>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate corporis est quasi quo dignissimos error?
                </p>
              </div>
              <ul className="list_none contact_info mt-margin">
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <div className="contact_detail">
                    <span>Address</span>
                    <p>22 International Division vio B, G Pirell</p>
                  </div>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <div className="contact_detail">
                    <span>Phone</span>
                    <p>+234 003333 0332</p>
                  </div>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <div className="contact_detail">
                    <span>Email</span>
                    <p>amankumaradk@gail.com</p>
                  </div>
                </li>
              </ul>
              <div className="contact_follow pt-2 pt-md-4">
                <span
                  className="text-uppercase animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Follow Us
                </span>
                <ul className="list_none social_icon">
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <a href="" className="icon_color">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <a href="" className="icon_color">
                      <FaInstagram />
                    </a>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <a href="" className="icon_color">
                      <FaTwitter />
                    </a>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <a href="" className="icon_color">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <a href="" className="icon_color">
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div
              className="pt-4 pt-md-0 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <form action="#" method="post" className="field_form" nmae="enq">
                <div
                  className="form-group col-md-12 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <input
                    type="text"
                    required
                    placeholder="Enter name"
                    className="form-control"
                    name="name"
                  />
                </div>
                <div
                  className="form-group col-md-12 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <input
                    type="text"
                    required
                    id="name"
                    placeholder="Enter name"
                    className="form-control"
                    name="name"
                  />
                </div>
                <div
                  className="form-group col-md-12 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <input
                    type="email"
                    required
                    id="email"
                    placeholder="Enter email"
                    className="form-control"
                    name="email"
                  />
                </div>
                <div
                  className="form-group col-md-12 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <input
                    type="subject"
                    required
                    id="subject"
                    placeholder="Enter subject"
                    className="form-control"
                    name="subject"
                  />
                </div>
                <div
                  className="form-group col-md-12 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <textarea
                    type="text"
                    required
                    id="description"
                    placeholder="Message"
                    className="form-control"
                    name="description"
                    role="2"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
