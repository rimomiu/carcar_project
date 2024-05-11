import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import AddTechnician from "./AddTechnician";
import TechnicianList from "./TechnicianList";
import CreateServiceAppointment from "./ServiceAppointmentForm";
import AppointmentList from "./AppointmentList";
import VehicleModelList from "./VehicleModelList";
import CreateVehicleModel from "./CreateVehicleModel";
import ServiceHistory from "./ServiceHistory";
import CustomerList from "./sales/CustomerList";
import CustomerForm from "./sales/CustomerForm";
import SalespeopleList from "./sales/SalespeopleList";
import SalespeopleForm from "./sales/SalespeopleForm";
import SalesList from "./sales/SalesList";
import SalesForm from "./sales/SalesForm";
import HistoryList from "./sales/HistoryList";
import AutomobilesList from "./inventory/AutomobilesList";
import AutomobilesForm from "./inventory/AutomobilesForm";
import ManufacturerForm from "./inventory/ManufacturerForm";
import ManufacturerList from "./inventory/ManufacturerList";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/technicians/" element={<TechnicianList />} />
          <Route path="/technicians/new/" element={<AddTechnician />} />
          <Route path="/appointments/" element={<AppointmentList />} />
          <Route
            path="/appointments/new/"
            element={<CreateServiceAppointment />}
          />
          <Route path="/models/" element={<VehicleModelList />} />
          <Route path="/models/new/" element={<CreateVehicleModel />} />
          <Route path="/history/" element={<ServiceHistory />} />
          <Route path="customer">
            <Route path="create" element={<CustomerForm />} />
            <Route path="list" element={<CustomerList />} />
          </Route>

          <Route path="salespeople">
            <Route path="list" element={<SalespeopleList />} />
            <Route path="create" element={<SalespeopleForm />} />
          </Route>

          <Route path="sales">
            <Route path="list" element={<SalesList />} />
            <Route path="create" element={<SalesForm />} />
          </Route>
          <Route path="history">
            <Route path="salesperson" element={<HistoryList />} />
          </Route>
          <Route path="automobiles">
            <Route path="list" element={<AutomobilesList />} />
            <Route path="create" element={<AutomobilesForm />} />
          </Route>
          <Route path="manufacturer">
            <Route path="create" element={<ManufacturerForm />} />
            <Route path="list" element={<ManufacturerList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
