import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NewAppointment from './components/NewAppointment';

class App extends Component {
	state = {
		appointments: []
	}

	createNewAppointment = data => {

		// Copy the actual state
		const appointments = [this.state.appointments, data];

		// Add the new state
		this.setState({
			appointments: appointments
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
				</div>
			</div>
		);
	}
}

export default App;