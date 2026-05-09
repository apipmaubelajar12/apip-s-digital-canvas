import { useState, useEffect, useRef } from "react";

const photos = [
  { id: 1, title: "Momen Tahfidz", category: "Kegiatan", url: "https://picsum.photos/seed/apip1/800/600" },
  { id: 2, title: "English Camp", category: "Kegiatan", url: "https://picsum.photos/seed/apip2/800/600" },
  { id: 3, title: "Desain Poster", category: "Desain", url: "https://picsum.photos/seed/apip3/800/600" },
  { id: 4, title: "Sunset Sekolah", category: "Fotografi", url: "https://picsum.photos/seed/apip4/800/600" },
  { id: 5, title: "Coding Project", category: "IT", url: "https://picsum.photos/seed/apip5/800/600" },
  { id: 6, title: "Outing Class", category: "Momen", url: "https://picsum.photos/seed/apip6/800/600" },
  { id: 7, title: "Lomba Design", category: "Desain", url: "https://picsum.photos/seed/apip7/800/600" },
  { id: 8, title: "Asrama Vibes", category: "Momen", url: "https://picsum.photos/seed/apip8/800/600" },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [perView, setPerView] = useState(3);
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w < 640 ? 1 : w < 1000 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, photos.length - perView);

  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  useEffect(() => {
    if (lightbox !== null) return;
    autoplayRef.current = setInterval(next, 3500);
    return () => clearInterval(autoplayRef.current);
  }, [perView, maxIndex, lightbox]);

  useEffect(() => {
    if (index > maxIndex) setIndex(0);
  }, [maxIndex]);

  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title reveal">Galeri</h2>
        <p className="section-subtitle reveal">
          Momen, karya, dan dokumentasi perjalanan selama di sekolah
        </p>

        <div className="gallery-carousel reveal">
          <button className="gallery-btn prev" onClick={prev} aria-label="Sebelumnya">
            ‹
          </button>

          <div className="gallery-viewport">
            <div
              className="gallery-track"
              ref={trackRef}
              style={{
                transform: `translateX(-${index * (100 / perView)}%)`,
              }}
            >
              {photos.map((p, i) => (
                <div
                  className="gallery-slide"
                  key={p.id}
                  style={{ flex: `0 0 ${100 / perView}%` }}
                >
                  <div className="gallery-card" onClick={() => setLightbox(i)}>
                    <img src={p.url} alt={p.title} loading="lazy" />
                    <div className="gallery-overlay">
                      <span className="gallery-cat">{p.category}</span>
                      <h3>{p.title}</h3>
                      <span className="gallery-zoom">🔍 Klik untuk perbesar</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="gallery-btn next" onClick={next} aria-label="Berikutnya">
            ›
          </button>
        </div>

        <div className="gallery-dots reveal">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`gallery-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>×</button>
          <button
            className="lightbox-btn prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i - 1 + photos.length) % photos.length);
            }}
          >
            ‹
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={photos[lightbox].url} alt={photos[lightbox].title} />
            <div className="lightbox-caption">
              <span className="gallery-cat">{photos[lightbox].category}</span>
              <h3>{photos[lightbox].title}</h3>
            </div>
          </div>
          <button
            className="lightbox-btn next"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i + 1) % photos.length);
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
