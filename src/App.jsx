import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Footer from "./Components/Layout/Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import Customers from "./Pages/Customers/Customers";
import Favourites from "./Pages/Favourites/Favourites";
import Detail from "./Pages/Detail/Detail";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />{" "}
            <Route path="/Customers" element={<Customers />} />
            <Route path="/Favourites" element={<Favourites />} />
            <Route path="/Detail" element={<Detail />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
