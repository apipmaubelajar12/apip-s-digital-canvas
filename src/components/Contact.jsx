const contacts = [
  { icon: "✉️", title: "Email", value: "muhafifhikam@gmail.com", href: "mailto:muhafifhikam@gmail.com" },
  { icon: "💬", title: "WhatsApp", value: "081384840187", href: "https://wa.me/6281384840187" },
  { icon: "📷", title: "Instagram", value: "@muhammadafifhikam__", href: "https://instagram.com/muhammadafifhikam__" },
];

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Mari Terhubung</h2>
        <p className="section-subtitle">Punya project atau sekadar ingin menyapa? Jangan ragu! 👋</p>

        <div className="contact-grid">
          {contacts.map((c) => (
            <a key={c.title} href={c.href} target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
