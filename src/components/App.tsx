import { Route, Routes } from "react-router-dom";

import Navigation from "./Navigation";
import Footer from "./Footer";
import MemberItem from "./About/MemberItem";
import NotFound from "./404NotFound";
import "../sass/App.scss";
import Home from "./Home/Home";
import About from "./About/About";
import Experience from "./Experience/ExperienceContainer";
import Services from "./Services/Services";

// const Home = asyncComponent(() =>
//   import("./Home/Home").then((module) => module.default)
// );
// const About = asyncComponent(() =>
//   import("./About/About").then((module) => module.default)
// );
// const Services = asyncComponent(() =>
//   import("./Services/Services").then((module) => module.default)
// );

// const Experience = asyncComponent(() =>
//   import("./Experience/ExperienceContainer").then((module) => module.default)
// );
export default function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/members/:memberName" element={<MemberItem />} />
          <Route path="/experience" element={<Experience />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
