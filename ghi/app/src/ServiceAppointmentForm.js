import React, { useEffect, useState } from 'react';

function CreateServiceAppointment() {
    const [technicians, setTechnicians] = useState([]);

    const [appointmentData, setAppointmentData] = useState({
        customer: '',
        vin: '',
        set_date: '',
        set_time: '',
        reason: '',
        technician: '',
    });

    const fetchData = async () => {
        const url = 'http://localhost:8080/api/technicians/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const url = 'http://localhost:8080/api/appointments/'
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(appointmentData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                setAppointmentData({
                    customer: '',
                    vin: '',
                    set_date: '',
                    set_time: '',
                    reason: '',
                    technician: '',
                });
            }
        }
        catch (error) {
            console.error('No appointments added');
        }
    }

    const handleFormChange = async (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setAppointmentData({
            ...appointmentData,
            [inputName]: value,
        });
    }

    // useEffect(() => {
    //     console.log('appointment', appointmentData);
    // }, [appointmentData]);
    // This is used to watch the state change when filling out fields. Very useful, if I do say so myself.

    return (
        <div className={'row'}>
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Service Appointment</h1>
                    <form onSubmit={handleSubmit} id="create-service-appointment">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Customer" required type="text" value={appointmentData.customer} name="customer" id="customer" className="form-control" />
                            <label htmlFor="customer">Customer</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleFormChange} required name="technician" value={appointmentData.technicians} id="technician" className="form-select">
                                <option value=''disabled={appointmentData.technician}>Select a Technician</option>
                                {
                                technicians.map((tech) => {
                                        return (
                                            <option key={tech.employee_id} value={tech.id}>
                                                {`${tech.first_name} ${tech.last_name}`}
                                            </option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="VIN" required type="text" value={appointmentData.vin} name="vin" id="vin" className="form-control" />
                            <label htmlFor="vin" >VIN</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Date" required type="date" value={appointmentData.set_date.date} name="set_date" id="set_date" className="form-control" />
                            <label htmlFor="date" >Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Time" required type="time" value={appointmentData.set_time.time} name="set_time" id="set_time" className="form-control" />
                            <label htmlFor="time" >Time</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="reason" required type="text" value={appointmentData.reason} name="reason" id="reason" className="form-control" />
                            <label htmlFor="reason" >Reason</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default CreateServiceAppointment;
