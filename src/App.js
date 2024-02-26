import React, { useState } from "react";
import Navbar from "./Componants/Utalities/Navbar";
import Footer from "./Componants/Utalities/Footer ";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menu";
import AboutUsPage from "./Pages/AboutUsPage";
import GalleryPage from "./Pages/GalleryPage";
import StuffPage from "./Pages/StuffPage";
import ReservePage from "./Pages/ReservePage";
import ContactPage from "./Pages/ContactPage";
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import ResetPassEmailPage from './Pages/ResetPassEmailPage';
import BlogsPage from './Pages/BlogsPage';


function App() {
  return (
    <BrowserRouter>
      <div className="font">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/Our-Stuff" element={<StuffPage />} />
          <Route path="/Reservation-form" element={<ReservePage />} />
          <Route path="/Contact-Form" element={<ContactPage />} />
          <Route path="/signUp-form" element={<SignUpPage />} />
          <Route path="/Login-form" element={<LoginPage />} />
          <Route path="/resetPass-P1" element={<ResetPassEmailPage />} />
          <Route path="all-Blogs" element={<BlogsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
