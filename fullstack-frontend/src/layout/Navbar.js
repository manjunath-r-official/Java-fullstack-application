import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-dark nav-purple p-3">
        <Link to="/" className="navbar-brand mb-0 h1">Full stack application</Link>
        { location.pathname!=='/adduser' && <Link to="/adduser" className="btn btn-outline-light" >Add User</Link>}
      </nav>
      
    </div>
  );
}
