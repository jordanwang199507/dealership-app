import Spline from "@splinetool/react-spline";
// import "./App.css";
import "./sass/main.scss";
import VehicleCard from "./VehicleCard";
import AgentCard from "./AgentCard";
import facebook from "./assets/social-facebook.svg";
import instagram from "./assets/social-instagram.svg";
import twitter from "./assets/social-twitter.svg";
import homepageBG from "./assets/homepage_background.png";
import agentsBG from "./assets/agents_background.png";
import { ReactComponent as SpecializedRolls } from "./assets/specialized-rolls.svg";
import { ReactComponent as SpecializedLotus } from "./assets/specialized-lotus.svg";
import { ReactComponent as SpecializedLambo } from "./assets/specialized-lambo.svg";
import { ReactComponent as SpecializedFerrari } from "./assets/specialized-ferrari.svg";
import { ReactComponent as SpecializedBarbus } from "./assets/specialized-brabus.svg";
import { ReactComponent as SpecializedBmw } from "./assets/specialized-bmw.svg";
import { ReactComponent as SpecializedBenz } from "./assets/specialized-benz.svg";
import { ReactComponent as Feature01 } from "./assets/feature01.svg";
import { ReactComponent as Feature02 } from "./assets/feature02.svg";
import { ReactComponent as Feature03 } from "./assets/feature03.svg";
import { ReactComponent as Feature04 } from "./assets/feature04.svg";
import { ReactComponent as Feature05 } from "./assets/feature05.svg";
import { ReactComponent as Feature06 } from "./assets/feature06.svg";
import { ReactComponent as Feature07 } from "./assets/feature07.svg";
import { ReactComponent as Feature08 } from "./assets/feature08.svg";
import featuresBG from "./assets/features_background.png";
import storyRBG from "./assets/story_r_background.png";
import storyRBG01 from "./assets/story_r_background_01.png";
import storyRBG02 from "./assets/story_r_background_02.png";
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

  const ourTeam = [
    {
      name: "Derek Josh",
      position: "Sales",
      email: "derek.josh@premiumexotic.ca",
      phone: "235-000-0000",
    },
    {
      name: "Peter Griffin",
      position: "Sales",
      email: "peter.griffin@premiumexotic.ca",
      phone: "235-111-1111",
    },
    {
      name: "Martin Smith",
      position: "Sales",
      email: "martin.smith@premiumexotic.ca",
      phone: "235-222-2222",
    },
    {
      name: "Cameron Parker",
      position: "Sales",
      email: "cameron.parker@premiumexotic.ca",
      phone: "235-333-3333",
    },
  ];

  return (
    <div className="app">
      <div className="container">
        <section className="header">
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
        </section>
        <section className="welcome">
          <div className="welcome__container">
            <div className="welcome__row">
              <h1 className="heading-1 welcome__header">
                Welcome to Premium Exotric Motorcars
              </h1>
              <p className="welcome__text">
                Lorem Ipsum is a world-renowned luxury & exotic car dealership
                based in Lorem, Canada. We’re lorem to offer an ipsum selection
                of luxury, exotic, and classic cars for sale. Our passionate
                team of enthusiasts is committed to redefining what you expect
                of the modern car buying experience.
              </p>
              <a className="btn">Learn More</a>
            </div>
          </div>
        </section>
        <section className="agents">
          <h2 className="heading-4 agents__heading">Our Team</h2>
          <img className="agents__background" src={agentsBG} />
          <div className="agents__container">
            {ourTeam.map((agent, index) => (
              <AgentCard index={index} agent={agent}></AgentCard>
            ))}
          </div>
        </section>
        <section className="specialized-brands">
          <div className="specialized-brands__title">
            <div className="specialized-brands__line"></div>
            <h4 className="heading-5 specialized-brands__heading">
              Specialized Brands
            </h4>
            <div className="specialized-brands__line"></div>
          </div>
          <div className="specialized-brands__collection">
            <SpecializedRolls className="specialized-brands__collection--brand specialized-brands__collection--brand1" />
            <SpecializedLotus className="specialized-brands__collection--brand specialized-brands__collection--brand2" />
            <SpecializedLambo className="specialized-brands__collection--brand specialized-brands__collection--brand3" />
            <SpecializedFerrari className="specialized-brands__collection--brand specialized-brands__collection--brand4" />
            <SpecializedBarbus className="specialized-brands__collection--brand specialized-brands__collection--brand5" />
            <SpecializedBmw className="specialized-brands__collection--brand specialized-brands__collection--brand6" />
            <SpecializedBenz className="specialized-brands__collection--brand specialized-brands__collection--brand7" />
          </div>
        </section>

        <div className="features__background--layer"></div>
        <section class="features">
          <div className="features__container">
            <div className="feature">
              <div className="feature__icon-container">
                <Feature01 className="feature__icon" />
              </div>
              <h4 className="heading-6 feature__heading">
                Premium Used Vehicles
              </h4>
              <p className="feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur distinctio necessitatibus pariatur voluptatibus.
              </p>
            </div>
            <div className="feature">
              <div className="feature__icon-container">
                <Feature02 className="feature__icon" />
              </div>

              <h4 className="heading-6 feature__heading">
                Impeccable Selections
              </h4>
              <p className="feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur distinctio necessitatibus pariatur voluptatibus.
              </p>
            </div>
            <div className="feature">
              <div className="feature__icon-container">
                <Feature03 className="feature__icon" />
              </div>

              <h4 className="heading-6 feature__heading">
                Uncompromising Quality
              </h4>
              <p className="feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur distinctio necessitatibus pariatur voluptatibus.
              </p>
            </div>
            <div className="feature">
              <div className="feature__icon-container">
                <Feature04 className="feature__icon" />
              </div>

              <h4 className="heading-6 feature__heading">Unmatched Service</h4>
              <p className="feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur distinctio necessitatibus pariatur voluptatibus.
              </p>
            </div>
            <div className="feature">
              <div className="feature__icon-container">
                <Feature05 className="feature__icon" />
              </div>

              <h4 className="heading-6 feature__heading">
                Trust and Transparency
              </h4>
              <p className="feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur distinctio necessitatibus pariatur voluptatibus.
              </p>
            </div>
            <div className="feature">
              <div className="feature__icon-container">
                <Feature06 className="feature__icon" />
              </div>

              <h4 className="heading-6 feature__heading">
                Exceptional After Support
              </h4>
              <p className="feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur distinctio necessitatibus pariatur voluptatibus.
              </p>
            </div>
            <div className="feature">
              <div className="feature__icon-container">
                <Feature07 className="feature__icon" />
              </div>

              <h4 className="heading-6 feature__heading">
                Expertly Curated Collection
              </h4>
              <p className="feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur distinctio necessitatibus pariatur voluptatibus.
              </p>
            </div>
            <div className="feature">
              <div className="feature__icon-container">
                <Feature08 className="feature__icon" />
              </div>

              <h4 className="heading-6 feature__heading">
                Competitive Pricing
              </h4>
              <p className="feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur distinctio necessitatibus pariatur voluptatibus.
              </p>
            </div>
          </div>
        </section>
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
