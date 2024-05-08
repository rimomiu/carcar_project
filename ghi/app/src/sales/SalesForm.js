import React, { useEffect, useState } from "react";

function SalesForm() {
  const [autos, setAutos] = useState([]);
  const [salespeople, setSalespeople] = useState([]);
  const [customers, setCustomers] = useState([]);

  const [vin, setVin] = useState("");
  const [salesperson, setSalesperson] = useState("");
  const [customer, setCustomer] = useState("");
  const [price, setPrice] = useState("");

  const fetchAutosData = async () => {
    const url = "http://localhost:8100/api/automobiles/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setAutos(data.autos);
    }
  };

  const fetchSalespeopleData = async () => {
    const url = "http://localhost:8090/api/salespeople/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
    }
  };

  const fetchCustomersData = async () => {
    const url = "http://localhost:8090/api/customers/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setCustomers(data.customers);
    }
  };

  useEffect(() => {
    fetchAutosData();
    fetchSalespeopleData();
    fetchCustomersData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.vin = vin;
    data.salesperson = salesperson;
    data.customer = customer;
    data.price = price;

    const salesUrl = "http://localhost:8090/api/sales/";
    const fetchSalesConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(salesUrl, fetchSalesConfig);
    if (response.ok) {
      const newSales = await response.json();
      setVin("");
      setSalesperson("");
      setCustomer("");
      setPrice("");
    }
  };
  const editSold = async (event) => {
    const autoData = {};

    autoData.sold = true;

    const autoUrl = `http://localhost:8100/api/automobiles/${vin}/`;
    const fetchAutoConfig = {
      method: "POST",
      body: JSON.stringify(autoData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(autoUrl, fetchAutoConfig);
  };

  const handleVINChange = (event) => {
    const value = event.target.value;
    setVin(value);
  };
  const handleSalespersonChange = (event) => {
    const value = event.target.value;
    setSalesperson(value);
  };
  const handleCustomerChange = (event) => {
    const value = event.target.value;
    setCustomer(value);
  };
  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Record a new sale</h1>
          <form onSubmit={handleSubmit} id="create-sale-form">
            <div className="mb-3">
              <select
                onChange={handleVINChange}
                value={vin}
                required
                name="vin"
                id="vin"
                className="form-select"
              >
                <option value="">Choose an automobile VIN</option>
                {autos
                  .filter((auto) => auto.sold === false)
                  .map((auto) => {
                    return (
                      <option key={auto.id} value={auto.vin}>
                        {auto.vin}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="mb-3">
              <select
                onChange={handleSalespersonChange}
                value={salesperson}
                required
                name="salesperson"
                id="salesperson"
                className="form-select"
              >
                <option value="">Choose a salesperson</option>
                {salespeople.map((salesperson) => {
                  return (
                    <option key={salesperson.id} value={salesperson.id}>
                      {`${salesperson.first_name} ${salesperson.last_name}`}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <select
                onChange={handleCustomerChange}
                value={customer}
                required
                name="customer"
                id="customer"
                className="form-select"
              >
                <option value="">Choose a customer</option>
                {customers.map((customer) => {
                  return (
                    <option key={customer.id} value={customer.id}>
                      {`${customer.first_name} ${customer.last_name}`}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handlePriceChange}
                value={price}
                placeholder="Price"
                required
                type="text"
                name="price"
                id="price"
                className="form-control"
              />
              <label htmlFor="price">Price</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SalesForm;
