const journey = [
  { date: "21 Maret 2008", title: "Lahir", desc: "Lahir di tengah keluarga yang penuh kasih sayang." },
  { date: "2014 - 2020", title: "Sekolah Dasar", desc: "Masa kecil yang ceria dan penuh rasa ingin tahu." },
  { date: "2020 - 2023", title: "SMP", desc: "Mulai mengenal dunia desain dan fotografi sederhana." },
  { date: "2023 - Sekarang", title: "HSI Boarding School", desc: "Menempa diri menjadi pribadi yang lebih baik secara akademik & spiritual." },
];

const Journey = () => {
  return (
    <section id="journey" className="journey">
      <div className="container">
        <h2 className="section-title">My Journey</h2>
        <p className="section-subtitle">Perjalanan hidup yang membentuk saya hari ini</p>

        <div className="timeline">
          {journey.map((j, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <p className="timeline-date">{j.date}</p>
                <h3>{j.title}</h3>
                <p>{j.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
