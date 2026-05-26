import { NavLink } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.png";

function Header() {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className= "main-nav-item" to = "/login"> 
            <i className="fa fa-user-circle"></i>
            Sign in
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
