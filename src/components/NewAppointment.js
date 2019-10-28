import React, { Component } from 'react';

class NewAppointment extends Component {
    state = {}

    render() {
        return (
            <div className="card mt-5 py-500">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Fill out the form to create a new appointment
                    </h2>
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Pet Name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Pet Name"
                                    name="pet"
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
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="time"
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
                                ></textarea>
                            </div>
                        </div>
                        <input 
                        type="submit"
                        className="py-3 mt-2 btn btn-success btn-block" 
                        value="Add New Appointment"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewAppointment;