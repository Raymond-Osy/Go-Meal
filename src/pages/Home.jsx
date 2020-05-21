import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Body from "../components/Body/Body"
import Footer from "../components/Footer/Footer"

const Homepage = () => (
  <div className="flex flex-col">
    <Navbar/>
    <Body/>
    <Footer/>
  </div>
);

export default Homepage;
