const Home = () => {
  const homePageAnimation = () => {
    const myName = document.getElementsByClassName("name");

    setTimeout(function () {
      myName[0].style.display = "inline";
    }, 1000);
    setTimeout(function () {
      myName[1].style.display = "inline";
    }, 1100);
    setTimeout(function () {
      myName[2].style.display = "inline";
    }, 1200);
    setTimeout(function () {
      myName[3].style.display = "inline";
    }, 1300);
    setTimeout(function () {
      myName[4].style.display = "inline";
    }, 1400);
    setTimeout(function () {
      myName[5].style.display = "inline";
    }, 1500);
    setTimeout(function () {
      myName[6].style.display = "inline";
    }, 1600);
    setTimeout(function () {
      myName[7].style.display = "inline";
    }, 1700);
    setTimeout(function () {
      myName[8].style.display = "inline";
    }, 1800);

    setTimeout(function () {
      document
        .getElementById("greater-than")
        .insertAdjacentHTML("afterend", "<div></div>");
    }, 2300);

    const lastName = document.getElementsByClassName("last-name");

    setTimeout(function () {
      lastName[0].style.display = "inline";
    }, 3000);
    setTimeout(function () {
      lastName[1].style.display = "inline";
    }, 3100);
    setTimeout(function () {
      lastName[2].style.display = "inline";
    }, 3200);
    setTimeout(function () {
      lastName[3].style.display = "inline";
    }, 3300);
    setTimeout(function () {
      lastName[4].style.display = "inline";
    }, 3400);
    setTimeout(function () {
      lastName[5].style.display = "inline";
    }, 3500);
    setTimeout(function () {
      lastName[6].style.display = "inline";
    }, 3600);
    setTimeout(function () {
      lastName[7].style.display = "inline";
    }, 3700);
    setTimeout(function () {
      lastName[8].style.display = "inline";
    }, 3800);
    setTimeout(function () {
      lastName[9].style.display = "inline";
    }, 4000);

    setTimeout(function () {
      document
        .getElementById("curly-brace")
        .insertAdjacentHTML("afterend", "<div></div>");
    }, 4600);

    const webDeveloper = document.getElementsByClassName("web-developer");

    setTimeout(function () {
      webDeveloper[0].style.display = "inline";
    }, 5100);
    setTimeout(function () {
      webDeveloper[1].style.display = "inline";
    }, 5200);
    setTimeout(function () {
      webDeveloper[2].style.display = "inline";
    }, 5300);
    setTimeout(function () {
      webDeveloper[3].style.display = "inline";
    }, 5400);
    setTimeout(function () {
      webDeveloper[4].style.display = "inline";
    }, 5500);
    setTimeout(function () {
      webDeveloper[5].style.display = "inline";
    }, 5600);
    setTimeout(function () {
      webDeveloper[6].style.display = "inline";
    }, 5700);
    setTimeout(function () {
      webDeveloper[7].style.display = "inline";
    }, 5800);
    setTimeout(function () {
      webDeveloper[8].style.display = "inline";
    }, 5900);
    setTimeout(function () {
      webDeveloper[9].style.display = "inline";
    }, 6000);
    setTimeout(function () {
      webDeveloper[10].style.display = "inline";
    }, 6100);
    setTimeout(function () {
      webDeveloper[11].style.display = "inline";
    }, 6200);
    setTimeout(function () {
      webDeveloper[12].style.display = "inline";
    }, 6300);
    setTimeout(function () {
      webDeveloper[13].style.display = "inline";
    }, 6400);
    setTimeout(function () {
      webDeveloper[14].style.display = "inline";
    }, 6500);
  };
  homePageAnimation();
  return (
    <div className="home pages">
      <span className="name">{"<"}</span>
      <span className="name">v</span>
      <span className="name">e</span>
      <span className="name">l</span>
      <span className="name">i</span>
      <span className="name">b</span>
      <span className="name">o</span>
      <span className="name">r</span>
      <span className="name" id="greater-than">
        {">"}
      </span>

      <span className="last-name">.</span>
      <span className="last-name">m</span>
      <span className="last-name">a</span>
      <span className="last-name">r</span>
      <span className="last-name">k</span>
      <span className="last-name">o</span>
      <span className="last-name">v</span>
      <span className="last-name">i</span>
      <span className="last-name">c</span>
      <span className="last-name" id="curly-brace">
        {"{"}
      </span>

      <span className="web-developer">w</span>
      <span className="web-developer">e</span>
      <span className="web-developer">b</span>
      <span className="web-developer">_</span>
      <span className="web-developer">d</span>
      <span className="web-developer">e</span>
      <span className="web-developer">v</span>
      <span className="web-developer">e</span>
      <span className="web-developer">l</span>
      <span className="web-developer">o</span>
      <span className="web-developer">p</span>
      <span className="web-developer">e</span>
      <span className="web-developer">r</span>
      <span className="web-developer">(</span>
      <span className="web-developer">)</span>
      <span className="flashing">|</span>
    </div>
  );
};

export default Home;
