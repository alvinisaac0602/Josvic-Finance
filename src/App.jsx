import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ForexPage from "./pages/ForexPage";
import Loans from "./pages/Loans";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import TermsAndConditions from "./pages/TermsAndConditions";
import Student from "./pages/Student";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forex" element={<ForexPage />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/student-portal" element={<div>Student Portal</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/privacy" element={<div>Privacy Policy</div>} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/student" element={<Student />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
