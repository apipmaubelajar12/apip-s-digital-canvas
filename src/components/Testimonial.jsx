const testimonials = [
  { name: "Ustadz Rahman", role: "Pembimbing", initial: "R", text: "Apip adalah santri yang rajin, sopan, dan punya semangat belajar tinggi. Selalu membantu teman-temannya." },
  { name: "Fadhil", role: "Sahabat", initial: "F", text: "Apip orangnya seru, ekspresif, dan selalu bisa diajak diskusi tentang banyak hal. Kreatif banget!" },
  { name: "Bunda Apip", role: "Orang Tua", initial: "B", text: "Anak yang penyayang dan bertanggung jawab. Selalu berusaha membahagiakan keluarga dengan caranya sendiri." },
  { name: "Zaki", role: "Teman Asrama", initial: "Z", text: "Pendengar yang baik. Kalau kamu butuh teman cerita, Apip adalah orang yang tepat." },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="container">
        <h2 className="section-title">Testimonial</h2>
        <p className="section-subtitle">Apa kata mereka tentang Apip</p>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initial}</div>
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
