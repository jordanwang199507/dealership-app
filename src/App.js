import Spline from "@splinetool/react-spline";
// import "./App.css";
import "./sass/main.scss";
import homepageBG from "./assets/homepage_background.png";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <div className="header_filter"></div>
          <div className="wrapper">
            <Spline
              className="spline"
              scene="https://prod.spline.design/9F4SYC1uL6oW9pcT/scene.splinecode"
            />
          </div>
          <div className="header_background">
            <div className="header_text">
              <h1 className="header_primary-title">
                Premium Exotic <br></br>
                <span>Used Vehicles Agency</span>
              </h1>
              <h3 className="header_secondary-title"></h3>
            </div>
            <a className="header_button">Explore Inventory →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
