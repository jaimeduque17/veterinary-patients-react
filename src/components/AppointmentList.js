import React from 'react';
import Appointment from './Appointment';
import PropTypes from 'prop-types';

const AppointmentList = ({ appointments, deleteAppointment }) => (
    <div className="card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center">Manage appointments here</h2>
            <div className="appointment-list">
                {appointments.map(appointment => (
                    <Appointment 
                        key={appointment.id}
                        appointment={appointment}
                        deleteAppointment={deleteAppointment}  
                    />
                ))}
            </div>
        </div>
    </div>
);

AppointmentList.propTypes = {
    appointments: PropTypes.array.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}

export default AppointmentList;