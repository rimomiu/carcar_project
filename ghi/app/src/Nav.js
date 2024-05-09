import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CarCar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/customer/list">
                Customers
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/customer/create">
                Create New Customer
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople/create">
                Create New Salespeople
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople/list">
                Salepeople List
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/create">
                Create New Sale
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/list">
                Sale List
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="history/salesperson">
                Sales History
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="automobiles/create">
                Create automobiles
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="automobiles/list">
                Automobiles List
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="manufacturer/create">
                Create New Manufacturer
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="manufacturer/list">
                Manufacturer List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
