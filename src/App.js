import Spline from "@splinetool/react-spline";
// import "./App.css";
import "./sass/main.scss";
import homepageBG from "./assets/homepage_background.png";
import storyRBG from "./assets/story_r_background.png";
import storyRBG01 from "./assets/story_r_background_01.png";
import storyRBG02 from "./assets/story_r_background_02.png";
import facebook from "./assets/social-facebook.svg";
import instagram from "./assets/social-instagram.svg";
import twitter from "./assets/social-twitter.svg";
import VehicleCard from "./VehicleCard";
import gal01 from "./assets/gal-1.png";
import gal02 from "./assets/gal-2.png";
import gal03 from "./assets/gal-3.png";
import gal04 from "./assets/gal-4.png";
import gal05 from "./assets/gal-5.png";
import gal06 from "./assets/gal-6.png";
import gal07 from "./assets/gal-7.png";
import gal08 from "./assets/gal-8.png";
import gal09 from "./assets/gal-9.png";
import gal10 from "./assets/gal-10.png";
import gal11 from "./assets/gal-11.png";
import gal12 from "./assets/gal-12.png";

function App() {
  const vehiclesInventory = [
    {
      name: "2022 Ferrari F8 Tributo",
      price: 649999.99,
      mileage: 12420,
      color: "champion red",
      engine: "twin-turbo 3.9L V-8 710HP",
      transmission: "7-Speed automatic",
    },
    {
      name: "2022 Mercedes GTR AMG",
      price: 649999.99,
      mileage: 12420,
      color: "champion red",
      engine: "twin-turbo 3.9L V-8 710HP",
      transmission: "7-Speed automatic",
    },
    {
      name: "2018 Audi R8",
      price: 649999.99,
      mileage: 12420,
      color: "champion red",
      engine: "twin-turbo 3.9L V-8 710HP",
      transmission: "7-Speed automatic",
    },
    {
      name: "2020 Porsche GT2",
      price: 649999.99,
      mileage: 12420,
      color: "champion red",
      engine: "twin-turbo 3.9L V-8 710HP",
      transmission: "7-Speed automatic",
    },
    {
      name: "2017 Lamborghini Aventor",
      price: 649999.99,
      mileage: 12420,
      color: "champion red",
      engine: "twin-turbo 3.9L V-8 710HP",
      transmission: "7-Speed automatic",
    },
    {
      name: "2022 Porshe GT3",
      price: 649999.99,
      mileage: 12420,
      color: "champion red",
      engine: "twin-turbo 3.9L V-8 710HP",
      transmission: "7-Speed automatic",
    },
  ];

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <div className="header_left">
            <div className="social">
              <div></div>
              <img src={facebook} alt="Facebook" />
              <img src={instagram} alt="Instagram" />
              <img src={twitter} alt="Twitter" />
            </div>
          </div>
          <Spline
            className="spline"
            scene="https://prod.spline.design/9F4SYC1uL6oW9pcT/scene.splinecode"
          />
          <div className="header_right">
            <div className="header_text">
              <h1 className="header_primary-title">
                Premium Exotic <br></br>
                <span>Used Vehicles Agency</span>
              </h1>
            </div>
            <a className="btn header__btn">Explore Inventory →</a>
          </div>
        </div>
        <div className="story__content">
          <h3 className="heading-3 mb-sm">Satisfied Customer</h3>
          <h2 className="heading-2 heading-2--light mb-md">
            &ldquo;This dealership truly understands what it means to deliver
            premium experience.&rdquo;
          </h2>
          <p className="story__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Tenetur distinctio
            necessitatibus pariatur voluptatibus. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <a className="btn">Find your vehicle</a>
        </div>
        <div className="story__pictures">
          <img
            src={storyRBG01}
            alt="background-image"
            className="story__img--1"
          />
          <img
            src={storyRBG02}
            alt="background-image"
            className="story__img--2"
          />
        </div>
        <section className="vehicles">
          <h2 className="heading-4 vehicles__heading">Our Inventory</h2>
          {vehiclesInventory.map((vehicle, index) => (
            <VehicleCard index={index} vehicle={vehicle}></VehicleCard>
          ))}
        </section>
        <section className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img src={gal01} alt="Gallery image 1" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img src={gal02} alt="Gallery image 2" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img src={gal03} alt="Gallery image 3" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img src={gal04} alt="Gallery image 4" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img src={gal05} alt="Gallery image 5" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img src={gal06} alt="Gallery image 6" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--7">
            <img src={gal07} alt="Gallery image 7" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--8">
            <img src={gal08} alt="Gallery image 8" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--9">
            <img src={gal09} alt="Gallery image 9" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--10">
            <img src={gal10} alt="Gallery image 10" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--11">
            <img src={gal11} alt="Gallery image 11" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--12">
            <img src={gal12} alt="Gallery image 12" className="gallery__img" />
          </figure>
        </section>
      </div>
    </div>
  );
}

export default App;
