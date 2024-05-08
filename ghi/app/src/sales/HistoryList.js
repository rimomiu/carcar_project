import React, { useEffect, useState } from "react";

function HistoryList() {
  const [salespeople, setSalespeople] = useState([]);
  const [sales, setSales] = useState([]);
  const [salesperson, setSalesperson] = useState("");

  const handleSalespersonChange = (event) => {
    const value = event.target.value;
    setSalesperson(value);
  };

  const fetchSalespeople = async () => {
    const response = await fetch("http://localhost:8090/api/salespeople/");
    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
    } else {
      console.error(response);
    }
  };

  const fetchSales = async () => {
    const response = await fetch("http://localhost:8090/api/sales/");
    if (response.ok) {
      const data = await response.json();
      setSales(data.sales);
    } else {
      console.error(response);
    }
  };

  useEffect(() => {
    fetchSalespeople();
    fetchSales();
  }, []);

  return (
    <>
      <div>
        <h1>Salesperson History</h1>
      </div>
      <div className="form-floating mb-3">
        <select
          onChange={handleSalespersonChange}
          placeholder="salesperson"
          required
          className="form-select"
          id="salesperson"
          value={salesperson}
        >
          <option value="">Choose a person</option>
          {salespeople.map((salesperson) => {
            return (
              <option key={salesperson.id} value={salesperson.id}>
                {`${salesperson.first_name} ${salesperson.last_name}`}
              </option>
            );
          })}
        </select>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Salesperson</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => {
            return (
              <tr key={sale.id}>
                <td>
                  {sale.salesperson.first_name} {sale.salesperson.last_name}
                </td>
                <td>
                  {sale.customer.first_name} {sale.customer.last_name}
                </td>
                <td>{sale.automobile.vin}</td>
                <td>${sale.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default HistoryList;