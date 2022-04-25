import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";

import Home from "./components/Home";
import About from "./components/About";
//Projects
import LanguageLab from "./components/Projects/LanguageLab";
import TwDThDAnimations from "./components/Projects/TwDThDAnimations";
import Kiosk from "./components/Projects/Kiosk";
import CallSoft from "./components/Projects/CallSoft";
import RFIDSoftwareSolutions from "./components/Projects/RFIDSoftwareSolutions";
import Assessment from "./components/Projects/Assessment";
import SkillDevelopmentTraining from "./components/Projects/SkillDevelopmentAndTraining";

import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Carrer from "./components/Carrer";
import Contact from "./components/Contact";
import ICT from "./components/Projects/ICT";
import SmartClass from "./components/Projects/SmartClass";
import EcontentDevelopment from './components/Projects/Econtent';
import SmartTailorShop from "./components/Products/SmartTailorShop";
import CareerDetails from "./components/CareerDetails";
import NetcomDigitalContents from "./components/Projects/NetcomDigitalContents"

import ShortFilm from "./components/services/ShortFilm";
import MobileApplicationDevelopment from "./components/services/MobileApplicationDevelopment";
import DesktopDevelopment from "./components/services/DesktopDevelopment";
import WebApplicationDevelopment from "./components/services/WebDevelopment";
import WebHostingServices from "./components/services/WebHostingServices";
import EducationalMobileAppGilGal from "./components/Products/EducationalMobileAppGilGal";

import PhoneFrame from "./PhoneFrame";

function App() {
  useEffect(() => {
    document.title = "Netcom Computers";
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/smart-class" element={<SmartClass />}></Route>
          <Route exact path="/netcom-digital-contents" element={<NetcomDigitalContents />}></Route>

          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>

          <Route exact path="/language-lab" element={<LanguageLab />}></Route>
          <Route
            exact
            path="/emis-sofware-solutions"
            element={<TwDThDAnimations />}
          ></Route>
          <Route exact path="/e-content-development" element={<EcontentDevelopment/>}></Route>
          <Route exact path="/kiosk-project" element={<Kiosk />}></Route>
          <Route exact path="/call-soft-project" element={<CallSoft />}></Route>
          <Route
            exact
            path="/software-solution"
            element={<RFIDSoftwareSolutions />}
          ></Route>
          <Route exact path="/assessment-project" element={<Assessment />}></Route>
          <Route
            exact
            path="/smart-tailor-shop"
            element={<SmartTailorShop />}
          />
          <Route exact path="/ict" element={<ICT />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
          <Route exact path="/carrer" element={<Carrer />}></Route>
          
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/skill-develoment-&-training" element={<SkillDevelopmentTraining />}></Route>
          <Route
            exact
            path="/careerdetails"
            element={<CareerDetails />}
          ></Route>


        <Route exact path="/short-film" element={<ShortFilm />}></Route>
        <Route exact path="/mobile-application-development" element={<MobileApplicationDevelopment />}></Route>
        <Route exact path="/desktop-development" element={<DesktopDevelopment />}></Route>
        <Route exact path="/web-application-development" element={<WebApplicationDevelopment />}></Route>
        <Route exact path="/web-hosting-service" element={<WebHostingServices />}></Route>

        <Route exact path="/educational-mobile-app-gilgal" element={<EducationalMobileAppGilGal />}></Route>


        <Route exact path="/frame" element={<PhoneFrame />}></Route>



        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
