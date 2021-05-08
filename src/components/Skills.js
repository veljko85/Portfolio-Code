import skillsImage from "../img/skills512-2.png";
import reactImage from "../img/react.png";

const Skills = () => {
  return (
    <div className="skills pages">
      <span className="page-title">Skills</span>
      <span className="underscore">_</span>

      <div className="skills-first-paragraph page-paragraph">
        <p>The main area of my expertise is front-end development.</p>
      </div>
      <div className="skills-second-paragraph page-paragraph">
        <p>
          React, HTML 5, CSS3, JavaScript, Sass, Babylon.js are some of the
          technologies I use to develop Web applications.
        </p>
      </div>
      <div className="skills-third-paragraph page-paragraph">
        <p>
          I also have expiriance with design tools such as Adobe Photoshop,
          Adobe Illustator and Adobe XD.{" "}
        </p>
      </div>
      <div
        className="skills-image"
        style={{ backgroundImage: `url(${skillsImage})` }}
      >
        <div className="set-image-horizontal"></div>
        <div
          className="react-image"
          style={{ backgroundImage: `url(${reactImage})` }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
