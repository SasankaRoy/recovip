// import logo from './logo.svg';
import React from "react";
import "./App.css";
import { Contact } from "./Pages/Contact";
import { Homepage } from "./Pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Homepage />} path="/" exact />
        </Routes>
        <Routes>
          <Route element={<Contact />} path="/contact" exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
