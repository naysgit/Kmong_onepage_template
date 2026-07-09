function Header({
    /* 수정하여 쓰는 부분 */
  logo = "🍯 허니빈 카페",
  menus = [
    { title: "홈", link: "#home" },
    { title: "소개", link: "#about" },
    { title: "메뉴", link: "#menu" },
    { title: "갤러리", link: "#gallery" },
    /* { title: "오시는길", link: "#contact" } */
  ],
  buttonText = "예약 문의",
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
