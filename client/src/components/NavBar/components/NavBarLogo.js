// Logo component for NavBar

import d from "../../../assets/images/D.svg";

import { Link } from "react-router-dom";

function NavBarLogo() {
  return (
    <Link to="/">
      <img
        className="max-h-20 min-w-[12] navsvghover"
        src={d}
        alt="Logo des Betreibers der Seite"
      />
    </Link>
  );
}

export default NavBarLogo;
