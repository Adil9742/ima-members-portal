import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  ShieldCheck,
  HeartHandshake,
  Scale,
} from "lucide-react";
import "./AboutUs.css";

const initiatives = [
  {
    title: "Indian Medical Association – Telangana State Branch",
    description:
      "The Indian Medical Association Telangana State Branch functions under IMA Headquarters, New Delhi, with jurisdiction across the entire Telangana State. The association promotes medical ethics, public health education, professional unity and cooperation among the medical fraternity. It actively participates in healthcare policy initiatives and national health programs.",
    highlight: "Member Strength: More than 19,000 doctors",
    Icon: Building2,
  },
  {
    title: "Family Security Scheme (FSS)",
    description:
      "Introduced in 2004, the Family Security Scheme provides financial assistance to the bereaved family of a deceased member. The scheme offers a claim amount of ₹20 lakhs per member.",
    extra:
      "Since inception, over ₹25 Crores has been disbursed to families of deceased members across Telangana.",
    highlight: "Active Members: Around 4,000",
    Icon: ShieldCheck,
  },
  {
    title: "Family Benefit Scheme (FBS)",
    description:
      "The Family Benefit Scheme is a contribution-based welfare initiative aimed at supporting the family of a member after demise.",
    details: ["A-Series – ₹6 Lakhs", "Regular Series – ₹10.5 Lakhs"],
    highlight: "Membership: 800+ (A-Series), 2200+ (Regular)",
    Icon: HeartHandshake,
  },
  {
    title: "Professional Protection & Welfare Scheme (PP&WS)",
    description:
      "Established in 1996, the PP&WS scheme safeguards doctors against legal challenges arising from professional practice in hospitals, nursing homes and diagnostic centers. It provides legal defense and financial support during litigation.",
    highlight: "Member Strength: Approximately 2,000 doctors",
    Icon: Scale,
  },
];

export default function AboutUs() {
  return (
    <main className="about-page">
      <div className="about-container">
        <div className="about-heading">
          <span className="about-kicker">WHO WE ARE</span>
          <h1>About IMA Telangana &amp; Welfare Initiatives</h1>
          <p>
            Supporting doctors, strengthening the medical community, and
            protecting the welfare of members and their families.
          </p>
        </div>

        <section className="about-timeline" aria-label="About IMA Telangana">
          {initiatives.map(
            ({ title, description, extra, details, highlight, Icon }) => (
              <article className="about-card" key={title}>
                <div className="about-timeline-marker">
                  <Icon size={19} strokeWidth={2.2} />
                </div>

                <div className="about-card-content">
                  <h2>{title}</h2>
                  <p>{description}</p>

                  {extra && <p className="about-extra">{extra}</p>}

                  {details && (
                    <div className="about-benefits">
                      <strong>Benefit Amount:</strong>
                      {details.map((detail) => (
                        <span key={detail}>• {detail}</span>
                      ))}
                    </div>
                  )}

                  <strong className="about-highlight">{highlight}</strong>
                </div>
              </article>
            ),
          )}
        </section>

        <div className="about-back">
          <Link to="/">
            <ArrowLeft size={17} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
