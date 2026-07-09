import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header({
  /* 수정하여 쓰는 부분 */
  logo = "Maison Bakery",
  menus = [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Menu", link: "#menu" },
    { title: "Gallery", link: "#gallery" },
  ],
  buttonText = "Order Now",
  buttonLink = "#contact",
  /* ---------------------------- */
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">{logo}</div>

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          {menus.map((menu) => (
            <a
              key={menu.link}
              href={menu.link}
              onClick={() => setIsOpen(false)}
            >
              {menu.title}
            </a>
          ))}
        </nav>

        <a href={buttonLink} className="header-btn">
          {buttonText}
        </a>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="메뉴 열기"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
