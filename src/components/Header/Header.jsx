function Header({
    /* 수정하여 쓰는 부분 */
  logo = "YourBrand",
  menus = [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Services", link: "#services" },
    { title: "Portfolio", link: "#portfolio" },
    { title: "Contact", link: "#contact" }
  ],
  buttonText = "무료 상담",
  buttonLink = "#contact"
  /* ---------------------------- */
}) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">{logo}</div>

        <nav className="nav">
          {menus.map((menu) => (
            <a key={menu.link} href={menu.link}>
              {menu.title}
            </a>
          ))}
        </nav>

        <a href={buttonLink} className="header-btn">
          {buttonText}
        </a>
      </div>
    </header>
  );
}

export default Header;