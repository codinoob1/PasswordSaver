import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <Manager />
      <Footer/>
    </>
  );
}

export default App;
