import { Link , NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/tipo/1">Hierba</NavLink>
      <NavLink to="/tipo/2">Veneno</NavLink>
      <NavLink to="/tipo/3">Agua</NavLink>
      <NavLink to="/carrito">carrito</NavLink>
    </nav>
  );
};

export default NavBar;