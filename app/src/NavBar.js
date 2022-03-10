import { Link , NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/categoria/1">Hierba</NavLink>
      <NavLink to="/categoria/2">Veneno</NavLink>
      <NavLink to="/categoria/3">Agua</NavLink>
      <NavLink to="/carrito">carrito</NavLink>
    </nav>
  );
};

export default NavBar;