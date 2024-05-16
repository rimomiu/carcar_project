import React, { useEffect, useState } from "react";

function CreateVehicleModel() {
  const [manufacturers, setManufacturers] = useState([]);
  const [models, setModels] = useState({
    name: "",
    picture_url: "",
  });

  async function newManufacturer() {
    const response = await fetch("http://localhost:8100/api/manufacturers/");
    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    } else {
      console.error("Error");
    }
  }

  useEffect(() => {
    newManufacturer();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = "http://localhost:8100/api/models/";

      const fetchConfig = {
        method: "post",
        body: JSON.stringify(models),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, fetchConfig);
      if (response.ok) {
        setModels({
          name: "",
          picture_url: "",
          manufacturer_id: "",
        });
      }
    } catch (error) {
      console.error("No models added");
    }
  };

  const handleFormChange = async (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setModels({
      ...models,
      [inputName]: value,
    });
  };

  useEffect(() => {
    console.log("models", models);
  }, [models]);

  return (
    <div className={"row"}>
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create Vehicle Model</h1>
          <form onSubmit={handleSubmit} id="create-vehicle-model">
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                placeholder="Model"
                required
                type="text"
                value={models.model}
                name="name"
                id="name"
                className="form-control"
              />
              <label htmlFor="name">Model</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                placeholder="Picture"
                required
                type="text"
                value={models.picture_url}
                name="picture_url"
                id="picture_url"
                className="form-control"
              />
              <label htmlFor="picture_url">Picture URL</label>
            </div>
            <div className="mb-3">
              <select
                onChange={handleFormChange}
                required
                name="manufacturer_id"
                value={models.manufacturer}
                id="manufacturer_id"
                className="form-select"
              >
                <option value="" disabled={models.manufacturer}>
                  Select a Manufacturer
                </option>
                {manufacturers.map((manufacturer) => {
                  return (
                    <option key={manufacturer.id} value={manufacturer.id}>
                      {`${manufacturer.name}`}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="button">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CreateVehicleModel;
