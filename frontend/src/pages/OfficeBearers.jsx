import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, UserRound, RefreshCw } from "lucide-react";
import "./OfficeBearers.css";

const API_URL = "http://127.0.0.1:8000/api/members/office-bearers/";

export default function OfficeBearers() {
  const [officeBearers, setOfficeBearers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadOfficeBearers() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();

        setOfficeBearers(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(
            "Unable to load office bearers. Please check the backend server.",
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadOfficeBearers();

    return () => controller.abort();
  }, []);

  const filteredMembers = officeBearers.filter((member) =>
    `${member.name} ${member.designation}`
      .toLowerCase()
      .includes(search.trim().toLowerCase()),
  );

  return (
    <main className="office-page">
      <section className="office-hero">
        <div className="office-container">
          <Link to="/" className="office-back">
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <p className="office-eyebrow">INDIAN MEDICAL ASSOCIATION</p>

          <h1>IMA Telangana Office Bearers</h1>
          <p className="office-term">Term 2024–2026</p>

          <p className="office-intro">
            Meet the team serving the medical fraternity across Telangana.
          </p>
        </div>
      </section>

      <section className="office-container office-content">
        <div className="office-heading">
          <div>
            <p className="office-section-label">LEADERSHIP TEAM</p>
            <h2>Our Office Bearers</h2>
            <p>Discover the leadership team for the 2024–2026 term.</p>
          </div>

          <label className="office-search">
            <Search size={18} />
            <input
              type="search"
              placeholder="Search by name or designation"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
        </div>

        {loading && (
          <div className="office-message">
            <RefreshCw size={20} className="office-spinner" />
            Loading office bearers...
          </div>
        )}

        {!loading && error && (
          <div className="office-message office-error" role="alert">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="office-grid">
            {filteredMembers.map((member) => (
              <article className="office-card" key={member.id}>
                <div className="office-avatar">
                  {member.profile_image ? (
                    <img
                      src={member.profile_image}
                      alt={`Profile of ${member.name}`}
                      className="office-profile-image"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <UserRound size={38} strokeWidth={1.4} />
                  )}
                </div>

                <span className="office-role">{member.designation}</span>

                <h3>{member.name}</h3>
                <h2> {member.phone}</h2>

                <p className="office-member-term">{member.term}</p>

                <div className="office-card-footer">
                  <span>IMA Telangana</span>
                  <span className="office-card-icon">
                    <UserRound size={16} />
                  </span>
                </div>
              </article>
            ))}

            {filteredMembers.length === 0 && (
              <div className="office-empty">
                {officeBearers.length === 0
                  ? "No office bearers have been added yet."
                  : "No matching office bearers found."}
              </div>
            )}
          </div>
        )}

        <Link to="/" className="office-home-link">
          <ArrowLeft size={17} />
          Return to Home
        </Link>
      </section>
    </main>
  );
}
