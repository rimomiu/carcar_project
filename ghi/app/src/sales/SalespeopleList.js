import React, { useEffect, useState } from "react";

function SalespeopleList() {
  const [salespeople, setSalespeople] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8090/api/salespeople/");
    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Salespeople</h1>
      </div>
      <div>
        <table className="comicGreen">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Employee ID</th>
            </tr>
          </thead>
          <tbody>
            {salespeople.map((sales) => {
              return (
                <tr key={sales.id}>
                  <td>{sales.first_name}</td>
                  <td>{sales.last_name}</td>
                  <td>{sales.employee_id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SalespeopleList;
