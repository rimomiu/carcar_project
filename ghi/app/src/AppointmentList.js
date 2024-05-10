import React, { useEffect, useState } from 'react';

function AppointmentList() {
    const [appointments, setAppointment] = useState([]);
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

    if (appointments === undefined) {
        return null;
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Customer</th>
                    <th>Technician</th>
                    <th>VIN</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Reason</th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(appointment => {
                    return (
                        <tr key={appointment.id}>
                            <td>{appointment.status}</td>
                            <td>{appointment.customer}</td>
                            <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                            <td>{appointment.vin}</td>
                            <td>{appointment.set_date }</td>
                            <td>{appointment.set_time }</td>
                            <td>{appointment.reason}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default AppointmentList;
