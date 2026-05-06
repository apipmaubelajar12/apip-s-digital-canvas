import { useState } from "react";

const data = {
  Tahfidz: [
    { title: "Setoran Juz 30", desc: "Dokumentasi setoran hafalan Juz 'Amma.", icon: "📖", link: "#" },
    { title: "Murajaah Harian", desc: "Rutinitas murajaah pagi & sore.", icon: "🕌", link: "#" },
    { title: "Tasmi' Juz 1", desc: "Tasmi' di hadapan ustadz pembimbing.", icon: "📿", link: "#" },
    { title: "Kajian Tafsir", desc: "Mengikuti kajian tafsir mingguan.", icon: "📚", link: "#" },
    { title: "Khataman", desc: "Khatam Al-Qur'an bulan Ramadhan.", icon: "🌙", link: "#" },
  ],
  English: [
    { title: "English Speech", desc: "Pidato bahasa Inggris di sekolah.", icon: "🎤", link: "#" },
    { title: "Storytelling", desc: "Bercerita dalam bahasa Inggris.", icon: "📖", link: "#" },
    { title: "Daily Conversation", desc: "Latihan percakapan harian.", icon: "💬", link: "#" },
    { title: "Vocab Challenge", desc: "100 kata baru setiap minggu.", icon: "📝", link: "#" },
    { title: "English Camp", desc: "Mengikuti camp bahasa Inggris.", icon: "🏕️", link: "#" },
  ],
  IT: [
    { title: "Personal Website", desc: "Membangun website portfolio sendiri.", icon: "🌐", link: "#" },
    { title: "Landing Page", desc: "Latihan membuat landing page modern.", icon: "💻", link: "#" },
    { title: "JavaScript Basic", desc: "Belajar dasar pemrograman JS.", icon: "⚡", link: "#" },
    { title: "Git & GitHub", desc: "Belajar version control.", icon: "🐙", link: "#" },
    { title: "Web Animation", desc: "Eksperimen animasi CSS.", icon: "✨", link: "#" },
  ],
  Design: [
    { title: "Poster Event", desc: "Poster untuk acara sekolah.", icon: "🖼️", link: "#" },
    { title: "Social Media Feed", desc: "Desain feed Instagram konsisten.", icon: "📱", link: "#" },
    { title: "Logo Concept", desc: "Eksplorasi konsep logo personal.", icon: "🎨", link: "#" },
    { title: "Photo Manipulation", desc: "Latihan manipulasi foto kreatif.", icon: "🪄", link: "#" },
    { title: "Video Cinematic", desc: "Edit video bergaya cinematic.", icon: "🎬", link: "#" },
    { title: "Reels Editing", desc: "Editing reels untuk konten media.", icon: "📹", link: "#" },
  ],
};

const categories = Object.keys(data);

const Projects = () => {
  const [active, setActive] = useState("Tahfidz");

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Karya & pengalaman yang pernah saya jalani</p>

        <div className="project-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {data[active].map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-image">
                <span>{p.icon}</span>
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.link} className="project-link" target="_blank" rel="noreferrer">
                  Lihat Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
