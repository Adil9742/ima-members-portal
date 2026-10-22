import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    children: [
      { label: "Our History", path: "/about-us" },
      { label: "Office Bearers", path: "/office-bearers" },
    ],
  },
  {
    label: "Schemes",
    children: [
      { label: "FSS Schemes", path: "/fss-schemes" },
      { label: "Health Schemes", path: "/health-schemes" },
    ],
  },
  {
    label: "Members",
    children: [
      { label: "Member Directory", path: "/members" },
      { label: "Member Login", path: "/login" },
    ],
  },
  {
    label: "Activities",
    children: [
      { label: "Events", path: "/events" },
      { label: "Gallery", path: "/gallery" },
      { label: "News", path: "/news" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const location = useLocation();

  // Close menus whenever the page changes.
  useEffect(() => {
    setMenuOpen(false);
    setActiveMenu("");
  }, [location.pathname]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <Phone size={14} />
            IMA Telangana State Branch
          </span>
          <span className="topbar-email">
            <Mail size={14} />
            Official association portal
          </span>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label="IMA Telangana home">
            <img
              className="brand-logo"
              src="https://www.imatelanganastate.org/Images/SB.jpg"
              alt="IMA Telangana State Branch Logo"
            />
            <div className="brand-copy">
              <strong>IMA TELANGANA</strong>
              <span>STATE BRANCH</span>
            </div>
          </Link>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav
            className={menuOpen ? "navigation open" : "navigation"}
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <div className="nav-item" key={item.label}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="nav-link"
                      onClick={() =>
                        setActiveMenu((current) =>
                          current === item.label ? "" : item.label,
                        )
                      }
                      aria-expanded={activeMenu === item.label}
                    >
                      {item.label}
                      <ChevronDown size={15} />
                    </button>

                    {activeMenu === item.label && (
                      <div className="dropdown">
                        {item.children.map((child) => (
                          <NavLink
                            to={child.path}
                            key={child.label}
                            onClick={() => {
                              setActiveMenu("");
                              setMenuOpen(false);
                            }}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `nav-link${isActive ? " active" : ""}`
                    }
                    onClick={() => {
                      setActiveMenu("");
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}

            <Link
              className="nav-cta"
              to="/administration-login"
              onClick={() => {
                setMenuOpen(false);
                setActiveMenu("");
              }}
            >
              Log In <ArrowRight size={15} />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
