import React from "react";
import Home from "./components/Home/Home";
import "./App.css";
import Certificate from "./components/Certificate/Certificate";
import BlockChain from "./components/BlockChain/BlockChain";
import Highlights from "./components/Highlights/Highlights";
import Developer from "./components/Developer/Developer";
import Eligibility from "./components/Eligibility/Eligibility";
import Technology from "./components/Technology/Technology";
import Syllabus from "./components/Syllabus/Syllabus";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="App">
      <div className="container App_content">
        <Home />
        <Certificate />
        <BlockChain />
        <Highlights />
        <Developer />
        <Eligibility />
        <Technology />
        <Syllabus />
        <Work />
        {/*<Slider />*/}
      </div>
    </div>
  );
}

export default App;
