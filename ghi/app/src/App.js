import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import CustomerList from "./sales/CustomerList";
import CustomerForm from "./sales/CustomerForm";
import SalespeopleList from "./sales/SalespeopleList";
import SalespeopleForm from "./sales/SalespeopleForm";
import SalesList from "./sales/SalesList";
import SalesForm from "./sales/SalesForm";
import HistoryList from "./sales/HistoryList";
function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
