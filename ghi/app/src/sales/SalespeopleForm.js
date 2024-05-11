import React, { useState } from "react";

function SalespeopleForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      employee_id: employeeId,
    };

    const salespeopleUrl = "http://localhost:8090/api/salespeople/";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(salespeopleUrl, fetchConfig);
    if (response.ok) {
      const newSalespeople = await response.json();
      setFirstName("");
      setLastName("");
      setEmployeeId("");
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
  function handleEmployeeIdChange(event) {
    const { value } = event.target;
    setEmployeeId(value);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create New Salespeople</h1>
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
                    onChange={handleEmployeeIdChange}
                    placeholder="Employee Id"
                    required
                    type="text"
                    name="employee_id"
                    id="employeeId"
                    className="form-control"
                    value={employeeId}
                  />
                  <label htmlFor="employee_id">Employee ID</label>
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

export default SalespeopleForm;
