import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export const Navbar = () => {
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  const onLogout = () => {
    setUser(null);
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        Jhonatan Florez
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link align-right  ${isActive ? "active" : ""}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>
          <button className="nav-item nav-link btn align-right" onClick={onLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  );
};
