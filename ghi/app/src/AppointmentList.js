import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';


function AppointmentList() {
    const [appointments, setAppointment] = useState([]);
    async function newAppointment() {
        const response = await fetch('http://localhost:8080/api/appointments/');
        if (response.ok) {
            const data = await response.json();
            setAppointment(data.appointments);
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

    const buttonHandlerCanceled = async (id) => {
        const cancelPoint = `http://localhost:8080/api/appointments/${id}/cancel/`
        const fetchConfig = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(cancelPoint, fetchConfig)
        if (response.ok) {
            const response = await fetch('http://localhost:8080/api/appointments/')
            if (response.ok) {
                const data = await response.json()
                setAppointment(data.appointments)
            }
        }
        }

    const buttonHandlerFinished = async (id) => {
        const finishPoint = `http://localhost:8080/api/appointments/${id}/finish/`
        const fetchConfig = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(finishPoint, fetchConfig)
        if (response.ok) {
            const response = await fetch('http://localhost:8080/api/appointments/')
            if (response.ok) {
                const data = await response.json()
                setAppointment(data.appointments)
            }
        }

        }


    return (
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
                            <Fragment>
                            <button onClick={buttonHandlerCanceled} className="btn btn-danger p-1">Cancel</button><button onClick={buttonHandlerFinished} className="btn btn-success p-1">Finish</button>
                            </Fragment>
                        </tr>
                    );

                })}
            </tbody>
        </table>
    );
}

export default AppointmentList;
