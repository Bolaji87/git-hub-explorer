import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const Home = () => <div>Home page</div>;
const AboutUs = () => <div>About us page</div>;

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
