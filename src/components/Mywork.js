import logoBloom from "../img/logoblomm1.png";
import logoVertical from "../img/vertical_logo-small.png";
import myWork from "../img/myWork.png";

const Mywork = () => {
  return (
    <div className="mywork pages">
      <span className="page-title">My Work</span>
      <span className="underscore">_</span>
      <a href="http://www.blommfactory.com/" target="blank">
        <div
          className="bloom-logo"
          style={{ backgroundImage: `url(${logoBloom})` }}
        ></div>
      </a>
      <a href="http://work.quincemedia.com/zgrada/" target="blank">
        <div
          className="bloom-logo"
          style={{ backgroundImage: `url(${logoVertical})` }}
        ></div>
      </a>
      {window.innerWidth > 1024 && (
        <div
          className="my-work-img"
          style={{ backgroundImage: `url(${myWork})` }}
        ></div>
      )}
    </div>
  );
};

export default Mywork;
