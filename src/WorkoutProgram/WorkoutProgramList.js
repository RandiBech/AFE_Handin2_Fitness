import { useEffect, useState, Component } from 'react';
import axios from 'axios';

export default class WorkoutProgramList extends Component {
	state = {
		workoutPrograms: [],
	};

	// hvordan skal jeg tjekke for hvilken user der er logget på?
	componentDidMount() {
		// get alle workoutPrograms still needs user login

		// get payload
		const tokenPayload = localStorage.getItem('jwtToken');
		console.log(tokenPayload);
		// axios.defaults.headers.common = { Authorization: `Bearer ${tokenPayload}` };
		const config = {
			headers: { Authorization: `Bearer ${tokenPayload}` },
		};
		// if user = trainer do this
		// should be this call for trainer, but needs to check for user credentials (jwt)
		axios.get(`https://afe2021fitness.azurewebsites.net/api/workoutPrograms/trainer`, config).then((res) => {
			const workoutPrograms = res.data;
			this.setState({ workoutPrograms });
			console.log(this.state.workoutPrograms);
		});
		// else if user = client  do this
		// axios.get(`https://afe2021fitness.azurewebsites.net/api/workoutPrograms/client/${clientId}`, config).then(res => {
		//     const workoutPrograms = res.data;
		//     this.setState({workoutPrograms});
		//     // if only 1 program go to workoutProgramDetails
		// });
	}

	render() {
		return (
			<div>
				<h2>Workouts</h2>
				<table>
					<thead>
						<tr>
							<th>Program</th>
							<th>Description</th>
							<th>Exercises</th>
						</tr>
					</thead>
					<tbody>
						{this.state.workoutPrograms.map((program) => (
							<tr key={program.workoutProgramId}>
								<td>{program.name}</td>
								<td>{program.description}</td>
								<td>
									{program.exercises.map((exercise) => (
										<li key={exercise.exerciseId}>{exercise.name}</li>
									))}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
