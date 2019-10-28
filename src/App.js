import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NewAppointment from './components/NewAppointment';
import AppointmentList from './components/AppointmentList';

class App extends Component {
	state = {
		appointments: []
	}

	// When the application loads
	componentDidMount() {
		const appointmentsLS = localStorage.getItem('appointments');
		if(appointmentsLS) {
			this.setState({
				appointments: JSON.parse(appointmentsLS)
			})
		}
	}

	// When a new appointment is deleted or added
	componentDidUpdate() {
		localStorage.setItem('appointments', JSON.stringify(this.state.appointments));
	}

	createNewAppointment = data => {

		// Copy the actual state
		const appointments = [...this.state.appointments, data];

		// Add the new state
		this.setState({
			appointments
		})
	}

	// Delete the appointment of the state
	deleteAppointment = id => {
		// Take a copy of the state
		const currentAppointment = [...this.state.appointments];

		// Use filter to take out the item @id from the array
		const appointments = currentAppointment.filter(appointment => appointment.id !== id)

		// Update the state
		this.setState({
			appointments
		})
	}

	render() {
		return (
			<div className="container">
				<Header
					title='Veterinary Patient Administrator'
				/>
				<div className="row">
					<div className="col-md-10 mx-auto">
						<NewAppointment
							createNewAppointment={this.createNewAppointment}
						/>
					</div>
					<div className="mt-5 col-md-10 mx-auto">
						<AppointmentList
							appointments={this.state.appointments}
							deleteAppointment={this.deleteAppointment}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;