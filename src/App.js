import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";


function App() {
  return (
    <BrowserRouter>
      <div className="AppContainer">
        <Header/>
        <div className="ContentContainer">
          <Routes>
            <Route path={"/"} element={<Home />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
