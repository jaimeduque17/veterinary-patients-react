import React from 'react';

const Appointment = ({ appointment }) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{appointment.pet}</h3>
            <p className="card-text"><span>Owner Name: </span>{appointment.owner}</p>
            <p className="card-text"><span>Date: </span>{appointment.date}</p>
            <p className="card-text"><span>Time: </span>{appointment.time}</p>
            <p className="card-text"><span>Sympton: </span></p>
            <p className="card-text">{appointment.sympton}</p>
        </div>
    </div>
);

export default Appointment;