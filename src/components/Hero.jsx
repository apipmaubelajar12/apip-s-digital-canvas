const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <span className="hero-greeting">👋 Halo, perkenalkan</span>
          <h1 className="hero-name">
            Muhammad Afif <span>Hikam</span>
          </h1>
          <p className="hero-role">Apip · Pelajar Kelas 12 HSI Boarding School</p>
          <p className="hero-desc">
            Seorang individu yang memiliki ketertarikan besar di dunia digital dan
            berkomitmen untuk terus belajar serta berkembang. Berfokus pada pemanfaatan
            teknologi sebagai sarana untuk menciptakan solusi kreatif, inovatif, dan
            berdampak positif bagi masa depan.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Lihat Project →</a>
            <a href="#contact" className="btn btn-outline">Hubungi Saya</a>
          </div>
        </div>
        <div className="hero-photo">
          <div className="hero-blob b1"></div>
          <div className="hero-blob b2"></div>
          <div className="hero-photo-box">
            <div className="hero-photo-inner">A</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
