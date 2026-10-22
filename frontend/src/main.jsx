import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import OfficeBearers from "./pages/OfficeBearers.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import SchemePdf from "./pages/SchemePdf.jsx";
import Gallery from "./pages/Gallery.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Login from "./pages/Login.jsx";

import Layout from "./components/Layout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";

import AdministrationLogin from "./pages/AdministrationLogin.jsx";
import AdminLoginForm from "./pages/AdminLoginForm.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public website routes */}
        <Route element={<Layout />}>
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

          <Route
            path="/health-schemes"
            element={
              <SchemePdf
                title="Health Schemes"
                pdfUrl="/schemes/health-schemes.pdf"
              />
            }
          />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/administration-login"
            element={<AdministrationLogin />}
          />

          <Route path="/login" element={<Login />} />
        </Route>

        {/* Administration entry and login pages */}

        <Route path="/admin-login/:portal" element={<AdminLoginForm />} />

        {/* Separate admin layout: no public navbar or footer */}
        <Route path="/admin-dashboard/:portal" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>
      </Routes>

      {/* Toast notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "12px",
            padding: "18px 22px",
            fontSize: "16px",
            minWidth: "320px",
            maxWidth: "420px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
          },
          success: {
            style: {
              background: "#ecfdf5",
              color: "#065f46",
              border: "1px solid #a7f3d0",
            },
            iconTheme: {
              primary: "#059669",
              secondary: "#ffffff",
            },
          },
          error: {
            style: {
              background: "#fef2f2",
              color: "#991b1b",
              border: "1px solid #fecaca",
            },
            iconTheme: {
              primary: "#dc2626",
              secondary: "#ffffff",
            },
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>,
);
