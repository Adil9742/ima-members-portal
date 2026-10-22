import { Outlet, Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import Navbar from "./Navbar";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <Link className="footer-brand" to="/">
            <div>
              <img
                className="brand-logo"
                src="https://www.imatelanganastate.org/Images/SB.jpg"
                alt="IMA Telangana State Branch Logo"
              />
            </div>
            {/* <div className="brand-mark">IMA</div> */}
            <div>
              <strong>IMA TELANGANA</strong>
              <br></br>
              <span>STATE BRANCH</span>
            </div>
          </Link>

          <p>
            Supporting the medical fraternity and promoting better healthcare
            for all.
          </p>

          <div className="footer-location">
            <MapPin size={17} /> Telangana, India
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            © {new Date().getFullYear()} IMA Telangana State Branch.
          </div>
        </div>
      </footer>
    </div>
  );
}
