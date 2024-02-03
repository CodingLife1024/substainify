// Home.js
import React from 'react';
import Intro from "../pages/Intro/Intro";
import Mission from "../pages/Mission/Mission";
import Dashboard from "../pages/Dashboard/Dashboard";
import Vision from "../pages/Vision/Vision";
import Contact from "../pages/Contact/Contact";

export default function Home() {
  return (
    <div>
      <div id="intro">
        <Intro />
      </div>
      <div id="mission">
        <Mission />
      </div>
      <div id="dashboard">
        <Dashboard />
      </div>
      <div id="vision">
        <Vision />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
