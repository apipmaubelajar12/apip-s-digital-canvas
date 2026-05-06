const skills = [
  { icon: "🎨", name: "Design", desc: "UI/UX, poster, dan visual identity", level: 75 },
  { icon: "📸", name: "Photography & Videography", desc: "Menangkap momen menjadi cerita", level: 80 },
  { icon: "✂️", name: "Photo & Video Editing", desc: "Adobe & Capcut untuk hasil cinematic", level: 78 },
  { icon: "💻", name: "Basic Web Development", desc: "HTML, CSS, JavaScript dasar", level: 60 },
  { icon: "👂", name: "Good Listener", desc: "Soft skill untuk memahami orang lain", level: 90 },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Kemampuan yang sedang terus saya kembangkan</p>

        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.name} className="skill-card reveal">
              <div className="skill-icon">{s.icon}</div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${s.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        <p className="skills-note">
          🌱 Semua skill di atas masih dalam tahap perkembangan — saya percaya proses!
        </p>
      </div>
    </section>
  );
};

export default Skills;
