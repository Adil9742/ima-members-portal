import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import "./ContactUs.css";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(form.subject || "Website enquiry");

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:info@imatelanganastate.org?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      <section className="contact-banner">
        <div className="contact-banner-card">
          <div className="contact-breadcrumb">
            <Link to="/">Home</Link> / Contact Us
          </div>
          <h1>Contact Us</h1>
          <p>We are here to help. Get in touch with IMA Telangana.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-heading">
          <span>GET IN TOUCH</span>
          <h2>We'd Love to Hear From You</h2>
          <p>
            Have a question about membership, welfare schemes, or association
            activities? Send us your enquiry.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="contact-info-intro">
              Reach out to the IMA Telangana State Branch.
            </p>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <Mail size={21} />
              </span>
              <div>
                <strong>Email Address</strong>
                <a href="mailto:info@imatelanganastate.org">
                  info@imatelanganastate.org
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <MapPin size={21} />
              </span>
              <div>
                <strong>Location</strong>
                <p>Telangana, India</p>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <Clock size={21} />
              </span>
              <div>
                <strong>Office Hours</strong>
                <p>Please contact the office to confirm availability.</p>
              </div>
            </div>

            <div className="contact-info-note">
              <Phone size={18} />
              <p>
                For urgent membership or scheme-related enquiries, please
                contact the association office directly.
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>
            <p>Fill in the details below to prepare your enquiry.</p>

            <div className="contact-form-row">
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label>
              Subject
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={5}
                required
              />
            </label>

            <button type="submit" className="contact-submit">
              <Send size={17} />
              Prepare Email
            </button>

            {submitted && (
              <p className="contact-success" role="status">
                <CheckCircle size={17} />
                Your email app should open with the enquiry details. Please send
                the email there.
              </p>
            )}

            <small>
              This form opens your email application. It does not send or store
              messages directly on the website.
            </small>
          </form>
        </div>

        <Link className="contact-back" to="/">
          <ArrowLeft size={17} />
          Back to Home
        </Link>
      </section>

      <footer className="contact-page-footer">
        <strong>IMA Telangana State Branch</strong>
        <span>Supporting doctors and healthier communities.</span>
        <span>
          © {new Date().getFullYear()} IMA Telangana. All Rights Reserved.
        </span>
      </footer>
    </main>
  );
}
