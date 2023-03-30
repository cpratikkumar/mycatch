import React from "react";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Introbox from "./Components/Introbox";
import "./Components/App.css";
import Dropdown from "./Components/Dropdown";
import Box from "./Components/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faShieldHalved,
  faChartSimple,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const pic1 = <FontAwesomeIcon icon={faCamera} style={{ color: "green" }} />;
const pic2 = (
  <FontAwesomeIcon icon={faShieldHalved} style={{ color: "green" }} />
);
const pic3 = (
  <FontAwesomeIcon icon={faChartSimple} style={{ color: "green" }} />
);
const pic4 = <FontAwesomeIcon icon={faTrophy} style={{ color: "green" }} />;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/events" />
          <Route path="/research" />
          <Route path="/partners" />
          <Route path="/testimonials" />
          <Route path="/faq" />
        </Routes>
        <div className="mainbdy" id="events">
          <div className="lside">
            <h1>A LEADER IN APP</h1>
            <h1>BASED EVENTS</h1>
            <div className="empty"></div>
            <p>
              Catch-photo-release events that helps to conserve the resources we
              love.
            </p>
            <div className="butn">
              <Dropdown />
              <button className="bttn">Organize an Events</button>
            </div>
          </div>
          <div className="rside">
            <a
              href="https://youtu.be/lHXBpk3YPDk"
              target="_blank"
              rel="norefferrer"
            >
              <img
                src="https://mycatch.ca/assets/play-video@2x.png"
                alt="video"
                target="_blank"
              />
            </a>

            <img
              src="https://mycatch.ca/assets/bg-hero.svg"
              alt="img"
              className="bgimg"
            />
          </div>
        </div>
        <div className="main2" id="research">
          <h1>A COMPLETE EVENT PLATFORM</h1>
          <div class="container ">
            <div class="row row-cols-1 row-cols-lg-4 row-cols-md-2 ">
              <div class="col">
                <Box
                  image={pic1}
                  title="Catch-Photo-Release"
                  para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, ut amet
        harum quia ratione excepturi ad porro! Consequatur, architecto nesciunt?"
                />
              </div>
              <div class="col">
                <Box
                  image={pic2}
                  title="Catch-Photo-Release"
                  para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, ut amet
        harum quia ratione excepturi ad porro! Consequatur, architecto nesciunt?"
                />
              </div>
              <div class="col">
                <Box
                  image={pic3}
                  title="Catch-Photo-Release"
                  para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, ut amet
        harum quia ratione excepturi ad porro! Consequatur, architecto nesciunt?"
                />
              </div>
              <div class="col">
                <Box
                  image={pic4}
                  title="Catch-Photo-Release"
                  para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, ut amet
        harum quia ratione excepturi ad porro! Consequatur, architecto nesciunt?"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main3" id="partners">
          <div className="left">
            <img
              src="https://mycatch.ca/assets/rod-and-boat@2x.png"
              alt="pic"
            />
          </div>
          <div className="right">
            <h1>GIVING BACK THROUGH RESEARCH</h1>
            <p>
              MyCatch is developed by <a href="/events">Angler,s Atlas</a>,
              which has been a proven, invaluable online resource for anglers
              since 1999. Angler's Atlas began collecting angler data for
              science in the early 2000's, and MyCatch has enabled us to
              efficiently collect more meaningful, workable data. We work with
              scientists across Canada to provide data that is otherwise
              difficult to collect, and to help inform fisheries management and
              conservation.
            </p>
            <button>
              <a href="/events" className="btnhref">
                Learn More About Angler Atlas
              </a>
            </button>
          </div>
        </div>
        <div className="khali"></div>
        <div className="main4">
          <h1>WHAT PEOPLE ARE SAYING</h1>
          <div className="bodybox">
            <Introbox
              para="Many Unifor members and their families are sports anglers and we have
        hosted fishing derby's for decades but, like so many other groups, we
        have had to cancel the last two years due to the pandemic. The
        innovative app-based event offered by Tourism Windsor Essex and Angler's
        Atlas will make it possible for our community to safely reconnect with
        nature and family during these difficult times."
              name="Mike Bartlett"
              sur="Unifor"
            />
            <Introbox
              para="Many Unifor members and their families are sports anglers and we have
        hosted fishing derby's for decades but, like so many other groups, we
        have had to cancel the last two years due to the pandemic. The
       ."
              name="Markos"
              sur="Ceduil Iahhil"
            />
            <Introbox
              para="Many Unifor members and their families are sports anglers and we have
        hosted fishing derby's for decades but, like so many other groups, we
        have had to cancel the last two years due to the pandemic. The  innovative app-based event offered by Tourism Windsor Essex and Angler's
        Atlas will make it possible for our community to safely reconnect with
        nature and family during these difficult times
       ."
              name="Zack Copland"
              sur="Angler"
            />
          </div>
        </div>
        <div className="Main5" id="testimonials">
          <img
            src="https://mycatch.ca/assets/bg-hero.svg"
            alt="img"
            className="backimg"
          />
          <h3>JOIN OUR EVENTS PLATFORM NOW!</h3>
          <h5>Start making an impact on our environment</h5>
          <div className="butn">
            <button>
              <a href="/">Organize Your Own</a>
            </button>
            <button>
              <a href="/">
                <img
                  src="https://mycatch.ca/assets/google-light.svg"
                  alt="img"
                />
              </a>
            </button>
            <button>
              <a href="/">
                <img
                  src="https://mycatch.ca/assets/apple-light.svg"
                  alt="img"
                />
              </a>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
