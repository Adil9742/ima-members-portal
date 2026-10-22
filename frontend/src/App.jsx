import {
  Search,
  Users,
  ShieldCheck,
  Newspaper,
  CalendarDays,
  FileUp,
  ArrowRight,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

// const navItems = [
//   { label: "Home", path: "/" },
//   {
//     label: "About Us",
//     children: [
//       { label: "Our History", path: "/about-us" },
//       { label: "Office Bearers", path: "/office-bearers" },
//     ],
//   },
//   {
//     label: "Schemes",
//     children: [
//       { label: "Fss Schemes", path: "/fss-schemes" },
//       { label: "Health Schemes", path: "/health-schemes" },
//     ],
//   },
//   {
//     label: "Members",
//     children: [
//       { label: "Member Directory", path: "/office-bearers" },
//       { label: "Member Login", path: "/login" },
//     ],
//   },
//   {
//     label: "Activities",
//     children: [
//       { label: "Events", path: "/events" },
//       { label: "Gallery", path: "/gallery" },
//       { label: "News", path: "/news" },
//     ],
//   },
//   { label: "Contact", path: "/contact" },
// ];

const features = [
  {
    icon: Users,
    title: "Office Bearers",
    text: "Meet the leadership serving our medical community.",
    path: "/office-bearers",
  },
  {
    icon: ShieldCheck,
    title: "FSS Shemes",
    text: "Explore support programmes and member benefits.",
    path: "/fss-schemes",
  },
  {
    icon: Newspaper,
    title: "Latest News",
    text: "Read announcements and association updates.",
    path: "/news",
  },
  {
    icon: CalendarDays,
    title: "Events & Activities",
    text: "Discover upcoming meetings and medical events.",
    path: "/gallery",
  },
];

function App() {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [activeMenu, setActiveMenu] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="site">
      {/* <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <Phone size={14} /> IMA Telangana State Branch
          </span>
          <span className="topbar-email">
            <Mail size={14} /> Official association portal
          </span>
        </div>
      </div> */}

      {/* <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="IMA Telangana home">
            <img
              className="brand-logo"
              src="https://www.imatelanganastate.org/Images/SB.jpg"
              alt="IMA Telangana State Branch Logo"
            />

            <div className="brand-copy">
              <strong>IMA TELANGANA</strong>
              <span>STATE BRANCH</span>
            </div>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? "navigation open" : "navigation"}>
            {navItems.map((item) => (
              <div className="nav-item" key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="nav-link"
                      onClick={() =>
                        setActiveMenu(
                          activeMenu === item.label ? "" : item.label,
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
                          <Link
                            to={child.path}
                            key={child.label}
                            onClick={() => {
                              setActiveMenu("");
                              setMenuOpen(false);
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    className="nav-link"
                    to={item.path}
                    onClick={() => {
                      setActiveMenu("");
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <a className="nav-cta" href="/login">
              Log In <ArrowRight size={15} />
            </a>
          </nav>
        </div>
      </header> */}

      <main>
        <section className="hero" id="home">
          <div className="hero-shape shape-one" />
          <div className="hero-shape shape-two" />

          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                INDIAN MEDICAL ASSOCIATION
              </div>
              <h1>
                Together for a
                <br />
                <span>Healthier</span> Tomorrow.
              </h1>
              <p>
                Uniting doctors, advancing medical excellence, and building
                healthier communities across Telangana.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#features">
                  Explore IMA <ArrowRight size={17} />
                </a>
                <a className="button button-outline" href="#member-tools">
                  Member Services
                </a>
              </div>

              <div className="hero-note">
                <ShieldCheck size={18} />
                <span>Professional unity. Compassionate healthcare.</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="medical-symbol">✚</div>
              <div className="visual-card card-top">
                <span className="visual-icon">
                  <Users size={20} />
                </span>
                <div>
                  <strong>One Community</strong>
                  <span>Stronger together</span>
                </div>
              </div>
              <div className="visual-card card-bottom">
                <span className="visual-icon">
                  <ShieldCheck size={20} />
                </span>
                <div>
                  <strong>Care & Commitment</strong>
                  <span>Working for better health</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="quick-strip">
          <div className="container quick-grid">
            <div>
              <span className="quick-icon">
                <Users size={21} />
              </span>
              <span>
                <strong>Member Services</strong>
                <small>Resources for doctors</small>
              </span>
            </div>
            <div>
              <span className="quick-icon">
                <ShieldCheck size={21} />
              </span>
              <span>
                <strong>Welfare & Support</strong>
                <small>Explore member schemes</small>
              </span>
            </div>
            <div>
              <span className="quick-icon">
                <CalendarDays size={21} />
              </span>
              <span>
                <strong>Events & Updates</strong>
                <small>What's happening at IMA</small>
              </span>
            </div>
          </div>
        </section>

        <section className="section features-section" id="features">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">DISCOVER IMA</span>
              <h2>Everything in One Place</h2>
              <p>
                Explore our association, member resources, activities, and
                initiatives.
              </p>
            </div>

            <div className="feature-grid">
              {features.map(({ icon: Icon, title, text, path }) => (
                <article className="feature-card" key={title}>
                  <div className="feature-icon">
                    <Icon size={25} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link to={path}>
                    Learn more <ArrowRight size={15} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="member-section" id="member-tools">
          <div className="container member-grid">
            <div className="member-copy">
              <span className="section-kicker">MEMBER SERVICES</span>
              <h2>Your member resources, all in one place.</h2>
              <p>
                Search the member directory or open the data management
                workspace to prepare member records for import.
              </p>
              <div className="member-benefits">
                <span>
                  <ShieldCheck size={17} /> Access-controlled records
                </span>
                <span>
                  <Search size={17} /> Quick member search
                </span>
                <span>
                  <FileUp size={17} /> CSV and Excel import workflow
                </span>
              </div>
            </div>

            <div className="member-panel">
              <h3>Member Directory</h3>
              <p>Search by member name, city, branch, or membership number.</p>
              <form
                className="member-search"
                onSubmit={(event) => {
                  event.preventDefault();
                  window.location.href =
                    "/members?search=" + encodeURIComponent(search);
                }}
              >
                <Search size={19} />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search members..."
                  aria-label="Search members"
                />
                <button type="submit" aria-label="Submit member search">
                  <ArrowRight size={18} />
                </button>
              </form>
              <div className="panel-divider" />
              <a className="upload-link" href="/admin/">
                <span className="upload-link-icon">
                  <FileUp size={20} />
                </span>
                <span>
                  <strong>Manage member records</strong>
                  <small>Open the secure Django administration page</small>
                </span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="container contact-inner">
            <div>
              <span className="section-kicker">GET IN TOUCH</span>
              <h2>Working together for better healthcare.</h2>
            </div>
            <a className="button button-light" href="/login">
              <Mail size={17} /> Contact the Association
            </a>
          </div>
        </section>
      </main>

      {/* <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <div className="brand-mark">IMA</div>
            <div>
              <strong>IMA TELANGANA</strong>
              <span>STATE BRANCH</span>
            </div>
          </div>
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
            © {new Date().getFullYear()} IMA Telangana State Branch. Replace
            placeholder contact details with verified official information.
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
