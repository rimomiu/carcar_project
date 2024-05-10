import { useEffect, useState } from "react";
import { Fragment } from "react";


function TechnicianList() {
    const [technicians, setTechnician] = useState([]);

    async function newTechnician() {
        const response = await fetch('http://localhost:8080/api/technicians/');
        if (response.ok) {
            const data = await response.json();

            setTechnician(data.technicians);
        }
        else {
            console.error('Error');
        }
    }

    // const deleteTechnician = async (id) => {
    //     const del = `http://localhost:8080/api/technicians/`;
    //     const fetchConfig = { method: 'delete', };

    //     const response = await fetch(del, fetchConfig);
    //     if (response.ok) {
    //         newTechnician();
    //     }
    // }
    // This function might come in handy later, reference back to the live channel to see if it's the proper method of implementing it

    useEffect(() => {
        newTechnician();
    }, []);

    if (technicians === undefined) {
        return null;
    }

    //Not necessary at the moment, but remember to clean up the JSX below to be a bit more aesthetic, including some spacing and a header for Technician at the top

    return (
        <Fragment>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Employee ID</th>
                    </tr>
                </thead>
                <tbody>
                    {technicians.map(technician => {
                        return (
                            <tr key={technician.id}>
                                <td>{technician.first_name}</td>
                                <td>{technician.last_name}</td>
                                <td>{technician.employee_id}</td>
                                {/* <td>
                    <button onClick={() => delete_technician(technician.id)}>Delete</button>
                </td> */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Fragment>
    );
}
export default TechnicianList;
