import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import "./SchemePdf.css";

export default function SchemePdf({
  title = "FAMILY SECURITY SCHEME",
  pdfUrl = "/schemes/family-security-scheme.pdf",
}) {
  return (
    <main className="scheme-page">
      <section className="scheme-banner">
        <div className="scheme-banner-card">
          <div className="scheme-breadcrumb">
            <Link to="/">Home</Link> / Schemes
          </div>

          <h1>Schemes - {title}</h1>

          <p>{title} – Full Details</p>
        </div>
      </section>

      <section className="scheme-content">
        <h2>{title}</h2>

        <div className="scheme-pdf-card">
          <div className="scheme-pdf-toolbar">
            <strong>{title} Scheme Full Details</strong>

            <a href={pdfUrl} download className="scheme-download">
              <Download size={14} />
              Download PDF
            </a>
          </div>

          <div className="scheme-pdf-viewer">
            <iframe
              title={`${title} PDF document`}
              src={`${pdfUrl}#toolbar=0&view=FitH`}
              className="scheme-pdf-frame"
            />
          </div>
        </div>

        <Link className="scheme-back" to="/">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </section>

      <footer className="scheme-footer">
        <strong>IMA Telangana State Branch</strong>
        <span>Email: info@imatelanganastate.org</span>
        <span>
          © {new Date().getFullYear()} IMA Telangana. All Rights Reserved.
        </span>
      </footer>
    </main>
  );
}
