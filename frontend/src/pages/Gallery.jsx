import { Link } from "react-router-dom";
import "./Gallery.css";

const galleryImages = [
  {
    src: "/gallery/fss-meeting.jpg",
    title: "FSS Annual Meeting",
    alt: "Doctors attending an FSS annual meeting",
  },
  {
    src: "/gallery/medical-camp.jpg",
    title: "Medical Camp",
    alt: "IMA Telangana medical camp event",
  },
  {
    src: "/gallery/doctor-interaction.jpg",
    title: "Doctor Interaction",
    alt: "Doctors participating in an association discussion",
  },
  {
    src: "/gallery/members-meeting-1.jpg",
    title: "Members Meeting",
    alt: "IMA Telangana members meeting",
  },
  {
    src: "/gallery/members-meeting-2.jpg",
    title: "Members Meeting",
    alt: "Association members discussing at a meeting",
  },
  {
    src: "/gallery/members-meeting-3.jpg",
    title: "Members Meeting",
    alt: "Doctors gathered for an association meeting",
  },
];

export default function Gallery() {
  return (
    <main className="gallery-page">
      <section className="gallery-banner">
        <div className="gallery-banner-card">
          <div className="gallery-breadcrumb">
            <Link to="/">Home</Link> / Gallery
          </div>

          <h1>Photo Gallery</h1>

          <p>FSS / FBS / PPWS and HS Event Photo Gallery</p>
        </div>
      </section>

      <section className="gallery-content">
        <h2>Photo Gallery</h2>
        <div className="gallery-title-line" />

        <div className="gallery-grid">
          {galleryImages.map((photo, index) => (
            <article className="gallery-card" key={photo.src}>
              <a
                className="gallery-image-link"
                href={photo.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open full-size image: ${photo.title}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </a>

              <div className="gallery-caption">{photo.title}</div>
            </article>
          ))}
        </div>
      </section>

      <footer className="gallery-footer">
        <strong>IMA Telangana State Branch</strong>
        <span>Email: info@imatelanganastate.org</span>
        <span>
          © {new Date().getFullYear()} IMA Telangana. All Rights Reserved.
        </span>
      </footer>
    </main>
  );
}
