import { FaMailBulk } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:veljko85varvarin@hotmail.com">
        <div className="footer-contact">
          <FaMailBulk className="footer-contact-icons" />
        </div>
      </a>
      <a href="https://github.com/veljko85" target="blank">
        <div className="footer-contact">
          <FaGithubSquare className="footer-contact-icons" />
        </div>
      </a>
      <a href="tel:+381-063-778-6728">
        <div className="footer-contact">
          <FaPhoneSquareAlt className="footer-contact-icons" />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/velibor-markovic-431378144/"
        target="blank"
      >
        <div className="footer-contact">
          <FaLinkedin className="footer-contact-icons" />
        </div>
      </a>
      <a href="https://www.instagram.com/mark_veljko/" target="blank">
        <div className="footer-contact">
          <FaInstagramSquare className="footer-contact-icons" />
        </div>
      </a>
    </footer>
  );
};

export default Footer;
