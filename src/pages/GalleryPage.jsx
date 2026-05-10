import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const photos = [
  { id: 1, title: "Momen Tahfidz", category: "Kegiatan", url: "https://picsum.photos/seed/apip1/1200/800" },
  { id: 2, title: "English Camp", category: "Kegiatan", url: "https://picsum.photos/seed/apip2/1200/800" },
  { id: 3, title: "Desain Poster", category: "Desain", url: "https://picsum.photos/seed/apip3/1200/800" },
  { id: 4, title: "Sunset Sekolah", category: "Fotografi", url: "https://picsum.photos/seed/apip4/1200/800" },
  { id: 5, title: "Coding Project", category: "IT", url: "https://picsum.photos/seed/apip5/1200/800" },
  { id: 6, title: "Outing Class", category: "Momen", url: "https://picsum.photos/seed/apip6/1200/800" },
  { id: 7, title: "Lomba Design", category: "Desain", url: "https://picsum.photos/seed/apip7/1200/800" },
  { id: 8, title: "Asrama Vibes", category: "Momen", url: "https://picsum.photos/seed/apip8/1200/800" },
  { id: 9, title: "Hari Kartini", category: "Kegiatan", url: "https://picsum.photos/seed/apip9/1200/800" },
  { id: 10, title: "Portrait Teman", category: "Fotografi", url: "https://picsum.photos/seed/apip10/1200/800" },
  { id: 11, title: "UI Design", category: "Desain", url: "https://picsum.photos/seed/apip11/1200/800" },
  { id: 12, title: "Makan Bersama", category: "Momen", url: "https://picsum.photos/seed/apip12/1200/800" },
];

export default function GalleryPage() {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const trackRef = useRef(null);
  const autoPlayRef = useRef(null);
  const navigate = useNavigate();

  const goTo = useCallback((i) => {
    const newIndex = (i + photos.length) % photos.length;
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  }, [index]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % photos.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + photos.length) % photos.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    autoPlayRef.current = setInterval(next, 5000);
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, next]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") { setIsAutoPlaying(false); next(); }
      if (e.key === "ArrowLeft") { setIsAutoPlaying(false); prev(); }
      if (e.key === "Escape") navigate("/#gallery");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, navigate]);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches?.[0]?.clientX);
    setIsAutoPlaying(false);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || e.touches?.[0]?.clientX;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const clientX = e.clientX || e.changedTouches?.[0]?.clientX;
    const diff = clientX - startX;
    if (diff < -80) next();
    else if (diff > 80) prev();
    setTranslateX(0);
  };

  const progress = ((index + 1) / photos.length) * 100;

  return (
    <div className="gallery-page">
      <div className="gallery-page-header">
        <a href="/" className="gallery-page-logo" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
          ← Kembali
        </a>
        <h1>Galeri Foto</h1>
        <span className="gallery-page-counter">{index + 1} / {photos.length}</span>
      </div>

      <div
        className="gallery-page-slider"
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div
          className="gallery-page-track"
          ref={trackRef}
          style={{
            transform: `translateX(calc(-${index * 100}% + ${translateX}px))`,
            transition: isDragging ? "none" : "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {photos.map((p, i) => (
            <div key={p.id} className="gallery-page-slide">
              <img src={p.url} alt={p.title} draggable={false} />
              <div className={`gallery-page-info ${showInfo ? "visible" : ""}`}>
                <span className="gallery-page-cat">{p.category}</span>
                <h2>{p.title}</h2>
              </div>
            </div>
          ))}
        </div>

        <button className="gallery-page-arrow prev" onClick={() => { setIsAutoPlaying(false); prev(); }} aria-label="Sebelumnya">
          ‹
        </button>
        <button className="gallery-page-arrow next" onClick={() => { setIsAutoPlaying(false); next(); }} aria-label="Berikutnya">
          ›
        </button>

        <div className="gallery-page-progress">
          <div className="gallery-page-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <button
          className="gallery-page-toggle-info"
          onClick={() => setShowInfo(!showInfo)}
          aria-label="Toggle info"
        >
          {showInfo ? "🙈" : "👁️"}
        </button>
      </div>

      <div className="gallery-page-thumbs">
        {photos.map((p, i) => (
          <button
            key={p.id}
            className={`gallery-page-thumb ${i === index ? "active" : ""}`}
            onClick={() => { setIsAutoPlaying(false); goTo(i); }}
            aria-label={`Go to ${p.title}`}
          >
            <img src={p.url} alt={p.title} />
          </button>
        ))}
      </div>
    </div>
  );
}
