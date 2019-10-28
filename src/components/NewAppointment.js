import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const initialState = {
    appointment: {
        pet: '',
        owner: '',
        date: '',
        time: '',
        sympton: ''
    },
    error: false
}

class NewAppointment extends Component {
    state = { ...initialState }

    // Reading the form data
    handleChange = (e) => {

        // poner lo que el usuario escribe en el estado
        this.setState({
            appointment: {
                ...this.state.appointment,
                [e.target.name]: e.target.value
            }
        })
    }

    // Sending the form
    handleSubmit = (e) => {
        e.preventDefault();

        // Extract state values
        const { pet, owner, date, time, sympton } = this.state.appointment;

        // Validate that all fields are filled
        if (pet === '' || owner === '' || date === '' || time === '' || sympton === '') {
            this.setState({
                error: true
            });

            // Stop execution
            return;

        }

        // Generate object with data
        const newAppointment = { ...this.state.appointment };
        newAppointment.id = uuid();

        // Add the appointment to the App state
        this.props.createNewAppointment(newAppointment)

        // Place the initialState in the state
        this.setState({
            ...initialState
        })

    }

    render() {

        // Extract state value
        const { error } = this.state;

        return (
            <div className="card mt-5 py-500">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Fill out the form to create a new appointment
                    </h2>
                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center">
                        All fields are required
                    </div> : null}
                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Pet Name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Pet Name"
                                    name="pet"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.pet}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Owner Name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Pet Owner's Name"
                                    name="owner"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.owner}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.date}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="time"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.time}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Symptom</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    name="sympton"
                                    placeholder="Describe the symptoms"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.sympton}
                                ></textarea>
                            </div>
                        </div>
                        <input
                            type="submit"
                            className="py-3 mt-2 btn btn-success btn-block"
                            value="Add New Appointment" />
                    </form>
                </div>
            </div>
        );
    }
}

NewAppointment.propTypes ={
    createNewAppointment: PropTypes.func.isRequired
}

export default NewAppointment;