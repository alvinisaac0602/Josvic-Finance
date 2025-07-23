import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ForexPage from "./pages/ForexPage";
import Loans from "./pages/Loans";

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
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/privacy" element={<div>Privacy Policy</div>} />
        <Route path="/terms" element={<div>Terms of Service</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
