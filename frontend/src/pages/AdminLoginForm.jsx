import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ShieldCheck, Eye, EyeOff, ArrowLeft, LockKeyhole } from "lucide-react";
import toast from "react-hot-toast";
import "./Login.css";
import "./AdminLoginForm.css";

const portalDetails = {
  "state-board": {
    title: "State Board IMA Telangana",
    subtitle: "State Board Administration Portal",
  },
  fss: {
    title: "FSS IMA Telangana",
    subtitle: "Family Security Scheme Administration",
  },
  fbs: {
    title: "FBS IMA Telangana",
    subtitle: "Family Benefit Scheme Administration",
  },
  ppws: {
    title: "PPWS IMA Telangana",
    subtitle: "Professional Protection Administration",
  },
};

export default function AdminLoginForm() {
  const { portal } = useParams();
  const navigate = useNavigate();

  const portalInfo = portalDetails[portal];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!portalInfo) {
    return (
      <div className="admin-form-page">
        <div className="admin-form-card">
          <h2>Login portal not found</h2>
          <Link to="/administration-login">Back to Administration Login</Link>
        </div>
      </div>
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!username.trim() || !password) {
      toast.error("Please enter both username and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password,
          portal,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Login failed. Please check your credentials.",
        );
      }

      sessionStorage.setItem("accessToken", data.access);
      sessionStorage.setItem("refreshToken", data.refresh);
      sessionStorage.setItem("adminUsername", data.username);
      sessionStorage.setItem("adminRole", data.role);
      sessionStorage.setItem("adminPortal", data.portal);

      toast.success(`Login successful! Welcome, ${data.username}.`);

      setTimeout(() => {
        navigate(`/admin-dashboard/${data.portal}`);
      }, 800);
    } catch (err) {
      if (err instanceof TypeError) {
        toast.error("Unable to connect to the server. Please try again.");
      } else {
        toast.error(err.message || "Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page admin-login-page">
      <div className="login-layout">
        {/* Left welcome panel */}
        <section className="login-welcome admin-login-welcome">
          <Link to="/" className="admin-login-brand">
            <img
              src="https://www.imatelanganastate.org/Images/SB.jpg"
              alt="IMA Telangana logo"
              className="admin-login-logo"
            />
            <span>
              <strong>IMA TELANGANA</strong>
              <small>STATE BRANCH</small>
            </span>
          </Link>

          <div className="admin-login-welcome-content">
            <span className="admin-login-eyebrow">
              <ShieldCheck size={16} />
              SECURE ADMINISTRATION
            </span>

            <h1>
              Welcome to
              <br />
              <span>IMA Telangana</span>
            </h1>

            <p>
              Access your administration portal to manage members and support
              the activities of the Indian Medical Association, Telangana State
              Branch.
            </p>

            <div className="admin-login-feature">
              <div className="admin-login-feature-icon">
                <LockKeyhole size={21} />
              </div>
              <div>
                <strong>Secure Access</strong>
                <p>Authorized administrators only</p>
              </div>
            </div>
          </div>

          <p className="admin-login-left-footer">
            Indian Medical Association · Telangana State Branch
          </p>
        </section>

        {/* Right login panel */}
        <section className="login-form-side admin-login-form-side">
          <div className="admin-form-card admin-login-card">
            <Link to="/administration-login" className="admin-form-back">
              <ArrowLeft size={17} />
              Back to login options
            </Link>

            <div className="admin-form-icon">
              <ShieldCheck size={32} />
            </div>

            <p className="admin-login-form-eyebrow">ADMINISTRATOR ACCESS</p>

            <h2 className="admin-login-form-title">Sign in to your account</h2>

            <h3 className="admin-login-portal-title">{portalInfo.title}</h3>

            <p className="admin-form-subtitle">{portalInfo.subtitle}</p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="admin-username">Username</label>
              <input
                id="admin-username"
                type="text"
                autoComplete="username"
                placeholder="Enter your username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                disabled={loading}
                required
              />

              <label htmlFor="admin-password">Password</label>

              <div className="admin-password-wrap">
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  disabled={loading}
                  required
                />

                <button
                  type="button"
                  className="admin-password-toggle"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  disabled={loading}
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>

              <button
                className="admin-form-submit"
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <div className="admin-form-security">
              <LockKeyhole size={15} />
              <span>
                Authorized administrators only. Never share your password.
              </span>
            </div>
          </div>

          <p className="admin-login-copyright">
            © {new Date().getFullYear()} IMA Telangana State Branch
          </p>
        </section>
      </div>
    </div>
  );
}
