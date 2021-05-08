import { BrowserRouter as Router, Route } from "react-router-dom";

import backgroundImgMob from "./img/codeBackground-mob.png";
import backgroundImgDes from "./img/codeBackground.png";

import "./styling/reset.css";
import "./styling/scss/style.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Mywork from "./components/Mywork";
import Contact from "./components/Contact";
import Home from "./components/Home";
import DefaultPlayground from "./components/DefaultPlayground";

function App() {
  const backgroundImg =
    window.innerWidth >= 1025 ? backgroundImgDes : backgroundImgMob;

  return (
    <Router>
      <div
        className="container"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <Header />
        <Home />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/mywork" component={Mywork} />
        <Route path="/contact" component={Contact} />
        <Route
          path="/Portfolio-Code"
          exact
          render={(props) => (
            <>
              <DefaultPlayground />
              <Footer />
            </>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
