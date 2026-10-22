import { ShieldCheck, HeartPulse, Users, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./AdministrationLogin.css";
// import "./Login.css";

const loginOptions = [
  {
    title: "STATE BOARD IMA TELANGANA",
    subtitle: "State Board",
    contact: "State Board Administration",
    icon: ShieldCheck,
    path: "/admin-login/state-board",
  },
  {
    title: "FSS IMA TELANGANA",
    subtitle: "Family Security Scheme",
    contact: "FSS Administration",
    icon: HeartPulse,
    path: "/admin-login/fss",
  },
  {
    title: "FBS IMA TELANGANA",
    subtitle: "Family Benefit Scheme",
    contact: "FBS Administration",
    icon: Users,
    path: "/admin-login/fbs",
  },
  {
    title: "PPWS IMA TELANGANA",
    subtitle: "Professional Protection",
    contact: "PPWS Administration",
    icon: Stethoscope,
    path: "/admin-login/ppws",
  },
];

export default function AdministrationLogin() {
  const navigate = useNavigate();

  return (
    <div className="admin-login-page">
      <section className="admin-login-hero">
        <div className="admin-login-welcome admin-login-welcome-compact">
          <span className="admin-login-label">SECURE ACCESS</span>
          <h1>Administration Login</h1>
          <p>Welcome. Select the administration portal you want to access.</p>
        </div>
      </section>

      <section className="admin-login-section">
        <div className="admin-login-heading">
          <h2>Choose Your Login Portal</h2>
          <p>Select the appropriate department to continue.</p>
        </div>

        <div className="admin-login-grid">
          {loginOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article className="admin-login-card" key={option.path}>
                <div className="admin-login-icon">
                  <Icon size={34} strokeWidth={1.7} />
                </div>

                <span className="admin-login-subtitle">{option.subtitle}</span>

                <h3>{option.title}</h3>

                <p className="admin-login-address">
                  Indian Medical Association
                  <br />
                  Telangana State Branch
                </p>

                <div className="admin-login-contact">
                  <strong>{option.contact}</strong>
                  <span>Authorized access only</span>
                </div>

                <button
                  className="admin-login-button"
                  onClick={() => navigate(option.path)}
                >
                  {option.subtitle} – Admin Login
                </button>
              </article>
            );
          })}
        </div>

        <p className="admin-login-note">
          <ShieldCheck size={16} />
          Login is restricted to authorized administrators.
        </p>
      </section>
    </div>
  );
}
