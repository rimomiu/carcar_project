import React, { useEffect, useState } from "react";

function SalesForm() {
  const [autos, setAutos] = useState([]);
  const [salespeople, setSalespeople] = useState([]);
  const [customers, setCustomers] = useState([]);

  const [vin, setVin] = useState("");
  const [salesperson, setSalesperson] = useState("");
  const [customer, setCustomer] = useState("");
  const [price, setPrice] = useState("");

  const handleVINChange = (event) => {
    const { value } = event.target;
    setVin(value);
  };
  const handleSalespersonChange = (event) => {
    const { value } = event.target;
    setSalesperson(value);
  };
  const handleCustomerChange = (event) => {
    const { value } = event.target;
    setCustomer(value);
  };
  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  };

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

  const recordSale = async () => {
    const salesData = {};

    salesData.automobile = vin;
    salesData.salesperson = salesperson;
    salesData.customer = customer;
    salesData.price = price;

    const salesUrl = "http://localhost:8090/api/sales/";
    const fetchSalesConfig = {
      method: "POST",
      body: JSON.stringify(salesData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const salesResponse = await fetch(salesUrl, fetchSalesConfig);

    if (salesResponse.ok) {
      setVin("");
      setSalesperson("");
      setCustomer("");
      setPrice("");
    }
  };

  const editSold = async () => {
    const autoData = {};

    autoData.sold = true;

    const autoUrl = `http://localhost:8100/api/automobiles/${vin}/`;
    const fetchAutoConfig = {
      method: "PUT",
      body: JSON.stringify(autoData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const autoResponse = await fetch(autoUrl, fetchAutoConfig);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    recordSale();
    editSold();
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
