import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="ml-auto navbar-dark bg-dark navbar-expand-m">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Home
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
          <ul class="navbar-nav mr-auto justify-content-between">
            <div>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/technicians/"
                >
                  List Technicians
                </NavLink>
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/technicians/new/"
                >
                  Create a Technician
                </NavLink>
              </li>
            </div>
            <div>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/appointments/"
                >
                  List Appointments
                </NavLink>
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/appointments/new/"
                >
                  Create an Appointment
                </NavLink>
              </li>
            </div>
            <div>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/models/"
                >
                  List Vehicle Models
                </NavLink>
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/models/new/"
                >
                  Create a Model
                </NavLink>
              </li>
            </div>
            <div>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/history/">
                  Service History
                </NavLink>
              </li>
            </div>

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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
