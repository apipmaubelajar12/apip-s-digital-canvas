import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const hashLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#journey", label: "Journey" },
  { href: "#testimonial", label: "Testimonial" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar" style={scrolled ? { boxShadow: "0 5px 20px rgba(0,0,0,0.05)" } : {}}>
      <div className="navbar-inner">
        <a href="/" className="navbar-logo" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Apip.</a>
        <ul className={`navbar-links ${open ? "open" : ""}`}>
          {hashLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleNav(e, l.href)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="/gallery" onClick={(e) => { e.preventDefault(); setOpen(false); navigate("/gallery"); }} style={{ color: "var(--blue)", fontWeight: 700 }}>Galeri Page →</a>
          </li>
        </ul>
        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
