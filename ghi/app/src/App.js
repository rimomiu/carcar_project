import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import CustomerList from "./sales/CustomerList";
import CustomerForm from "./sales/CustomerForm";
function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="sales">
            <Route path="customerform" element={<CustomerForm />} />
            <Route path="customerlist" element={<CustomerList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
