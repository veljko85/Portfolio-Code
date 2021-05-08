import { FaMailBulk } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import contactMe from "../img/contactMe.png";

const Contact = () => {
  return (
    <div className="contact pages">
      <span className="page-title">Contact</span>
      <span className="underscore">_</span>
      <div className="contact-first-paragraph page-paragraph">
        <p>
          I am interested in full time job, part time jobs and freelance
          opportunities.
        </p>
      </div>

      <div className="contact-second-paragraph page-paragraph">
        <p>
          If you have any questions or request, don't hesitate to contact me.
        </p>
      </div>

      <a href="mailto:veljko85varvarin@hotmail.com">
        <div className="contact-contact">
          <FaMailBulk className="contact-contact-icons" />
          <p className="contact-paragraph page-paragraph">
            veljko85varvarin@hotmail.com
          </p>
        </div>
      </a>
      <a href="https://github.com/veljko85" target="blank">
        <div className="contact-contact">
          <FaGithubSquare className="contact-contact-icons" />
          <p className="contact-paragraph page-paragraph">
            veljko85 (Velibor Markovic)
          </p>
        </div>
      </a>
      <a href="tel:+381-063-778-6728">
        <div className="contact-contact">
          <FaPhoneSquareAlt className="contact-contact-icons" />
          <p className="contact-paragraph page-paragraph">+381638843453</p>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/velibor-markovic-431378144/"
        target="blank"
      >
        <div className="contact-contact">
          <FaLinkedin className="contact-contact-icons" />
          <p className="contact-paragraph page-paragraph">
            Velibor Markovic | LinkedIn
          </p>
        </div>
      </a>
      <a href="https://www.instagram.com/mark_veljko/" target="blank">
        <div className="contact-contact">
          <FaInstagramSquare className="contact-contact-icons" />
          <p className="contact-paragraph page-paragraph">
            Veljko Markovic (@mark_veljko)
          </p>
        </div>
      </a>

      {window.innerWidth > 1024 && (
        <div
          className="contact-me-img"
          style={{ backgroundImage: `url(${contactMe})` }}
        ></div>
      )}
    </div>
  );
};

export default Contact;
