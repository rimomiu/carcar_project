import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AddTechnician from './AddTechnician';
import TechnicianList from './TechnicianList';
import CreateServiceAppointment from './ServiceAppointmentForm';
import AppointmentList from './AppointmentList';
import VehicleModelList from './VehicleModelList'
import CreateVehicleModel from './CreateVehicleModel';
import ServiceHistory from './ServiceHistory'

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/technicians/' element={<TechnicianList />} />
          <Route path='/technicians/new/' element={<AddTechnician />} />
          <Route path='/appointments/' element={<AppointmentList />} />
          <Route path='/appointments/new/' element={<CreateServiceAppointment />} />
          <Route path='/models/' element={<VehicleModelList />} />
          <Route path='/models/new/' element={<CreateVehicleModel />} />
          <Route path='/history/' element={<ServiceHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
