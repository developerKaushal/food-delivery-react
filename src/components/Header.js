import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn((prev) => !prev);
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Food Delivery App" />
      </div>

      <button
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-items ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={closeMenu}>Home</li>
          <li onClick={closeMenu}>About Us</li>
          <li onClick={closeMenu}>Contact Us</li>
          <li onClick={closeMenu}>Cart</li>
          <li>
            <button className="login-btn" onClick={handleLoginToggle}>
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
