import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AddTechnician from './AddTechnician';
import TechnicianList from './TechnicianList';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/technicians/' element={<TechnicianList technician={props.technician}/>} />
          <Route path='/technicians/new/' element={<AddTechnician />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
