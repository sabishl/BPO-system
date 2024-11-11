import { NavLink } from 'react-router-dom';

export default function Header() {


  return (
    <header className="header">
      <div className="container">
        <div className="header-left">
          <h1>Admin Dashboard</h1>
        </div>
        <nav className="header-right">
          <ul>
            <li>
              <NavLink
                to="/create-account"
                activeClassName="active"
              >
                Create Account
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                activeClassName="active"
              >
                New Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ongoing-projects"
                activeClassName="active"
              >
                Ongoing Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/completed-projects"
                activeClassName="active"
              >
                Completed Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                activeClassName="active"
              >
                Logout
              </NavLink>
    
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
