import { NavLink } from 'react-router-dom';

export default function ClientHeader() {


  return (
    <header className="header">
      <div className="container">
        <div className="header-left">
          <h1>BPO Management System</h1>
        </div>
        <nav className="header-right">
          <ul>
            <li>
              <NavLink
                to="/emp-projects"
                activeClassName="active"
              >
                Your Projects
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
