import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../Helpers/useAuth';
import { Roles } from '../Helpers/Roles';
import { TrainerTabel } from './TrainerTabel';
import { ClientTabel } from './ClientTabel';

export default function WorkoutProgramList(props) {
	const [state, setState] = useState({ workoutPrograms: [] });
	const { authed, tokenPayload } = useAuth();

	const jwtToken = localStorage.getItem('jwtToken');
	const config = {
		headers: { Authorization: `Bearer ${jwtToken}` },
	};

	console.log(`payload: ${tokenPayload}`);

	useEffect(() => {
		async function getWorkoutPrograms() {
			const baseUrl = 'https://afe2021fitness.azurewebsites.net/api/workoutPrograms';
			const rolePath = '';
			if (tokenPayload.Role === Roles.PersonalTrainer) {
				rolePath = '/trainer';
			} else if (tokenPayload.Role === Roles.Client) {
				rolePath = `/client/${tokenPayload.UserId}`;
			}
			// const url = baseUrl + rolePath;
			// const res = await axios.get(url, config);
			const res = await axios.get(`${baseUrl} ${rolePath}`, config);
			setState({ workoutPrograms: res.data });
			console.log(state.workoutPrograms);
		}
		getWorkoutPrograms();
	}, []);

	return (
		<div>
			<h2>Workouts</h2>
			{/* {tokenPayload.Role == Roles.PersonalTrainer ? <TrainerTabel value={state} /> : <ClientTabel value={state} />} */}
			<table>
				<thead>
					<tr>
						<th>Program</th>
						<th>Description</th>
						<th>Exercises</th>
					</tr>
				</thead>
				<tbody>
					{state.workoutPrograms.map((program) => (
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
