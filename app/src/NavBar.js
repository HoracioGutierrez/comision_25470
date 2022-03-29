import { Link , NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/tipo/Hierba">Hierba</NavLink>
      <NavLink to="/tipo/Veneno">Veneno</NavLink>
      <NavLink to="/tipo/Agua">Agua</NavLink>
      <NavLink to="/carrito">carrito</NavLink>
    </nav>
  );
};

export default NavBar;