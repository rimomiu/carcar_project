import React, { useEffect, useState } from "react";

function AddTechnician() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    employee_id: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = "http://localhost:8080/api/technicians/";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setFormData({
          first_name: "",
          last_name: "",
          employee_id: "",
        });
      }
    } catch (error) {
      console.error("No technician added:");
    }
  };

  const handleFormChange = async (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setFormData({
      ...formData,
      [inputName]: value,
    });
  };

  return (
    <div className={"row"}>
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a Technician</h1>
          <form onSubmit={handleSubmit} id="add-technician">
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                placeholder="first_name"
                required
                type="text"
                value={formData.first_name}
                name="first_name"
                id="first_name"
                className="form-control"
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                placeholder="last_name"
                required
                type="text"
                value={formData.last_name}
                name="last_name"
                id="last_name"
                className="form-control"
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                placeholder="employee_id"
                required
                type="text"
                value={formData.employee_id}
                name="employee_id"
                id="employee_id"
                className="form-control"
              />
              <label htmlFor="employee_id">Employee ID</label>
            </div>
            <button className="button">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddTechnician;
