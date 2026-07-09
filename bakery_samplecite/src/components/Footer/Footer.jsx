function Footer({
  logo = "Maison Bakery",
  copyright = "© 2026 Maison Bakery. All Rights Reserved.",
}) {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div>
          <h2>{logo}</h2>
          <p>매일 아침 갓 구운 빵을 전합니다</p>
        </div>

        <div className="footer-menu">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
        </div>

        <div className="footer-social">
          <a href="#">Instagram</a>
          <a href="#">Naver Blog</a>
        </div>
      </div>

      <div className="footer-copy">{copyright}</div>
    </footer>
  );
}

export default Footer;
