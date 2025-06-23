import './Nav.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Nav() {
  const [role, setRole] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole?.toLowerCase());
    setMenuOpen(false); // close menu when route changes
  }, [location]);

  const handleLogout = () => {
    localStorage.clear();
    setRole(null);
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">

              {/* Logo for user/guest */}
              {role !== 'admin' && (
                <Link to="/" className="logo">
                  <img src="assets/images/L (2).png" alt="logo" />
                </Link>
              )}

              {/* Navigation Menu */}
              <ul className="nav" style={{ display: menuOpen ? 'block' : '' }}>
                {role === 'admin' ? (
                  <>
                    <li><Link to="/admin">Admin Home</Link></li>
                    <li><Link to="/add-category">Add Category</Link></li>
                    <li><Link to="/add-subcategory">Add Subcategory</Link></li>
                    <li><Link to="/manage-users">Manage Users</Link></li>
                    <li><Link to="/manage-oders">Manage Orders</Link></li>
                    <li><Link to="/admin/contacts">Manage Contacts</Link></li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="btn btn-link nav-link"
                        style={{ padding: 7.5 }}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>

                    {role === 'user' && (
                      <> 
                      <li><Link to="/orders">My Orders</Link></li>
                      <li>
                         
                        <button
                          onClick={handleLogout}
                          className="btn btn-link nav-link"
                          style={{ padding: 8 }}
                        >
                          Logout
                        </button>
                      </li></>
                     
                    )}

                    {/* 👇 Show Login/Register only if not logged in */}
                    {!role && (
                      <>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                       

                      </>
                    )}
                  </>
                )}
              </ul>

              {/* Menu Toggle Button for Mobile */}
              <a
                className={`menu-trigger ${menuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
