import React, { useState } from "react";

function CustomerForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      address,
      phone_number: phoneNumber,
    };

    const customerUrl = "http://localhost:8090/api/customers/";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(customerUrl, fetchConfig);
    if (response.ok) {
      const newCustomers = await response.json();
      setFirstName("");
      setLastName("");
      setAddress("");
      setPhoneNumber("");
    }
  };
  function handleFirstNameChange(event) {
    const { value } = event.target;
    setFirstName(value);
  }

  function handleLastNameChange(event) {
    const { value } = event.target;
    setLastName(value);
  }
  function handleAddressChange(event) {
    const { value } = event.target;
    setAddress(value);
  }
  function handlePhoneNumberChange(event) {
    const { value } = event.target;
    setPhoneNumber(value);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create New Customer</h1>
              <form onSubmit={handleSubmit} id="create-presentation-form">
                <div className="form-floating mb-3">
                  <input
                    onChange={handleFirstNameChange}
                    placeholder="First Name"
                    required
                    type="text"
                    name="first_name"
                    id="firstName"
                    className="form-control"
                    value={firstName}
                  />
                  <label htmlFor="first_name">First Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    onChange={handleLastNameChange}
                    placeholder="Last Name"
                    required
                    type="text"
                    name="last_name"
                    id="lastName"
                    className="form-control"
                    value={lastName}
                  />
                  <label htmlFor="last_name">Last Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    onChange={handleAddressChange}
                    placeholder="Address"
                    required
                    type="text"
                    name="address"
                    id="address"
                    className="form-control"
                    value={address}
                  />
                  <label htmlFor="address">Address</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    onChange={handlePhoneNumberChange}
                    placeholder="Phone Number"
                    required
                    type="text"
                    name="phone_number"
                    id="phoneNumber"
                    className="form-control"
                    value={phoneNumber}
                  />
                  <label htmlFor="phone_number">Phone Number</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerForm;
