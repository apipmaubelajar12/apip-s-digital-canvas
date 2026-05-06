const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Tentang Saya</h2>
        <p className="section-subtitle">Kenalan lebih dekat dengan Apip ✨</p>

        <div className="about-grid">
          <div className="about-card reveal">
            <h3>Kepribadian</h3>
            <p>
              Saya adalah pribadi yang ramah, peduli terhadap sekitar, ceria, dan
              ekspresif. Saya percaya bahwa energi positif yang kita berikan akan
              kembali kepada diri kita sendiri.
            </p>
            <div className="about-traits">
              <span className="trait">Ramah</span>
              <span className="trait">Peduli</span>
              <span className="trait">Ceria</span>
              <span className="trait">Ekspresif</span>
            </div>
          </div>

          <div className="about-card reveal">
            <h3>Passion & Minat</h3>
            <p>
              Saya memiliki ketertarikan mendalam pada dunia <strong>desain,
              fotografi, dan videografi</strong>. Bagi saya, setiap karya bukan
              sekadar visual, tapi media untuk mengekspresikan diri dan
              menyampaikan cerita.
            </p>
          </div>

          <div className="about-card reveal">
            <h3>Tujuan Hidup</h3>
            <p>
              Tujuan saya sederhana namun bermakna: menjadi pribadi yang lebih
              baik setiap harinya, dan membanggakan orang tua melalui setiap
              langkah dan karya yang saya hasilkan.
            </p>
          </div>

          <div className="about-card reveal">
            <h3>Filosofi</h3>
            <p>
              "Karya adalah cerminan jiwa." Setiap proyek yang saya buat adalah
              bagian kecil dari diri saya yang ingin saya bagikan kepada dunia,
              berharap bisa menginspirasi orang lain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
