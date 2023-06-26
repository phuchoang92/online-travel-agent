import { useNavigate } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register"); // Chuyển đến trang '/other'
  };

  const handleLoginClick = () => {
    navigate("/login"); // Chuyển đến trang '/other'
  };

  const handleLogoClick = () => {
    navigate("/"); // Chuyển đến trang '/other'
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleLogoClick}>Booking</span>
        <div className="navItems">
          <button className="navButton">List your Hotel</button>
          <button className="navButton" onClick={handleRegisterClick}>Register</button>
          <button className="navButton" onClick={handleLoginClick}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
