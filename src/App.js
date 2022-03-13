import React from "react";
import style from "./App.module.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";


function App() {
  return (
    <BrowserRouter>
      <div className={style.AppContainer}>
        <Header/>
        <div className={style.ContentContainer}>
          <Routes>
            <Route path={"/react-portfolio"} element={<Home />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
