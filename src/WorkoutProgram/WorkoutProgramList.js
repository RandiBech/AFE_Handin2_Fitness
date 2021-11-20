import { useEffect, useState, Component } from 'react';
import axios from 'axios';

export default class WorkoutProgramList extends Component {
	state = {
		workoutPrograms: [],
	};

	// hvordan skal jeg tjekke for hvilken user der er logget på?
	componentDidMount() {
		// get alle workoutPrograms still needs user login
		axios.get(`https://afe2021fitness.azurewebsites.net/api/workoutPrograms`).then((res) => {
			const workoutPrograms = res.data;
			this.setState({ workoutPrograms });
		});
		// if user = trainer do this
		// should be this call for trainer, but needs to check for user credentials (jwt)
		// axios.get(`https://afe2021fitness.azurewebsites.net/api/workoutPrograms/trainer`).then((res) => {
		// 	const workoutPrograms = res.data;
		// 	this.setState({ workoutPrograms });
		// });
		// else if user = client  do this
		// axios.get(`https://afe2021fitness.azurewebsites.net/api/workoutPrograms/client/${clientId}`).then(res => {
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
						{this.state.workoutPrograms.map((program) => {
							<tr key={program.workoutProgramId}>
								<td>{program.name}</td>
								<td>{program.description}</td>
								<td>{program.exercises}</td>
							</tr>;
						})}
					</tbody>
				</table>
			</div>
			// <ul>
			//     {this.state.workoutPrograms.map(program => )}
			// </ul>
		);
	}
}
// 	useEffect(() => {
// 		const fetchWorkoutPrograms = async () => {
// 			const result = await axios('https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms/trainer');

// 			setData(result.data);
// 		};

// 		fetchWorkoutPrograms();
// 	}, []); // har denne nogle dependencies?

// 	return (
// 		<ul>
// 			{data.workoutPrograms.map((program) => {
// 				<li key={program.workoutProgramId}>{program.json()}</li>;
// 			})}
// 		</ul>
// 	);
// }
