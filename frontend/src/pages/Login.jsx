import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  ArrowRight,
  UserRound,
} from "lucide-react";
import "./Login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    // The Django authentication API will be connected here next.
    setMessage(
      "The login interface is ready, but authentication is not connected to Django yet.",
    );
  }

  return (
    <main className="login-page">
      <section className="login-layout">
        <div className="login-welcome">
          <div className="login-welcome-content">
            <div className="login-brand">
              <img
                src="https://www.imatelanganastate.org/Images/SB.jpg"
                alt="IMA Telangana logo"
              />
              <div>
                <strong>IMA TELANGANA</strong>
                <span>STATE BRANCH</span>
              </div>
            </div>

            <span className="login-eyebrow">
              <ShieldCheck size={16} />
              MEMBER PORTAL
            </span>

            <h1>
              Welcome back to
              <br />
              <span>your community.</span>
            </h1>

            <p>
              Access your membership information, explore welfare schemes, and
              stay connected with the IMA Telangana medical community.
            </p>

            <div className="login-benefit">
              <ShieldCheck size={20} />
              <div>
                <strong>Member-focused services</strong>
                <span>Membership and welfare resources in one place</span>
              </div>
            </div>
          </div>

          <div className="login-decoration login-decoration-one" />
          <div className="login-decoration login-decoration-two" />
        </div>

        <div className="login-form-side">
          <form className="login-card" onSubmit={handleSubmit}>
            <Link to="/" className="login-home-link">
              ← Back to Home
            </Link>

            <div className="login-heading">
              <div className="login-heading-icon">
                <LockKeyhole size={25} />
              </div>
              <h2>Member Login</h2>
              <p>Sign in to access your member account.</p>
            </div>

            <label className="login-label" htmlFor="username">
              Membership Number or Email
            </label>
            <div className="login-input-wrap">
              <UserRound size={19} />
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Enter membership number or email"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>

            <label className="login-label" htmlFor="password">
              Password
            </label>
            <div className="login-input-wrap">
              <LockKeyhole size={19} />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="login-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>

            <div className="login-options">
              <label className="login-remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                Remember me
              </label>

              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <button className="login-submit" type="submit">
              Sign In <ArrowRight size={18} />
            </button>

            {message && (
              <p className="login-message" role="status">
                {message}
              </p>
            )}

            <div className="login-divider">
              <span />
              <small>MEMBER SUPPORT</small>
              <span />
            </div>

            <p className="login-support">
              Need help accessing your account?
              <br />
              <Link to="/contact">Contact IMA Telangana</Link>
            </p>

            <p className="login-security">
              <ShieldCheck size={15} />
              Member information should be accessed securely.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
