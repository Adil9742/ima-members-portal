import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import OfficeBearers from "./pages/OfficeBearers.jsx";
import "./index.css";
import AboutUs from "./pages/AboutUs.jsx";
import SchemePdf from "./pages/SchemePdf.jsx";
import Gallery from "./pages/Gallery.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Login from "./pages/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/office-bearers" element={<OfficeBearers />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/fss-schemes"
          element={
            <SchemePdf
              title="Family Security Scheme"
              pdfUrl="/schemes/family-security-scheme.pdf"
            />
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/welfare-schemes" element={<WelfareSchemes />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
