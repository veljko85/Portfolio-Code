import myImage from "../img/myimagemedium.png";

const About = () => {
  return (
    <div className="about pages">
      <span className="page-title">About me</span>
      <span className="underscore">_</span>
      <div className="about-first-paragraph  page-paragraph">
        <p>
          I am Velibor Markovic, self motivated, self taught Front-end Web
          developer.
        </p>
      </div>
      <div className="about-second-paragraph  page-paragraph">
        <p>
          Highly motivated person that never give up, have good communicational
          skills, self aware, never hesitate to ask and consult.
        </p>
      </div>
      <div className="about-third-paragraph  page-paragraph">
        <p>
          Besides my interest in entire frontend spectrum, I am also interested
          in to fitness, travelling, watching TV series and video games.
        </p>
      </div>
      <div
        className="my-image"
        style={{ backgroundImage: `url(${myImage})` }}
      ></div>
    </div>
  );
};

export default About;
