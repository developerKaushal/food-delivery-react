import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
<button onClick={() => {
  console.log("Button clicked");
  setIsLoggedIn(true);
  }}>{isLoggedIn ? "Logout" : "Login"}</button>
        </ul>
      </div>
    </div>
  );
}

export default Header;