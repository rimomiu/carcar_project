import React, { Fragment, useEffect, useState } from 'react';


function AppointmentHistory() {
    const [appointments, setAppointment] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    async function newAppointment() {
        const response = await fetch('http://localhost:8080/api/appointments/');
        if (response.ok) {
            const data = await response.json();
            setAppointment(data.appointments)
        }
        else {
            console.error('Error');
        }
    }

    useEffect(() => {
        newAppointment();
    }, []);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    if (searchInput.length >= 0) {
        appointments.filter((appointment) => {
            return appointment.vin.match(searchInput);
        });
    }

    if (appointments === undefined) {
        return null;
    }

    return (
        <Fragment>
        <input type="text" placeholder="Search by VIN" /><button onClick={() => handleChange(searchInput)} className="btn btn-primary p-1">Submit</button>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Is VIP?</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(appointment => {
                    return (
                        <tr key={appointment.id}>
                            <td>{appointment.vin}</td>
                            <td>{appointment.is_vip ? 'Yes' : 'No'}</td>
                            <td>{appointment.customer}</td>
                            <td>{appointment.set_date}</td>
                            <td>{appointment.set_time}</td>
                            <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                            <td>{appointment.reason}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </Fragment>
    );
}

export default AppointmentHistory;
