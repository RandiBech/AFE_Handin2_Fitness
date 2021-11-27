import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function TrainerTabel({ workoutPrograms }) {
	return (
		<table>
			<thead>
				<tr>
					<th>Client</th>
					<th>Program</th>
					<th>Description</th>
					<th>Exercises</th>
				</tr>
			</thead>
			<tbody>
				{workoutPrograms.map((program) => (
					<tr key={program.workoutProgramId}>
						<td>{program.clientId}</td>
						<td>
							{/* <Link to={`/workoutprograms/${program.workoutProgramId}`}>{program.name}</Link> */}
							<Link to={`/details/${program.workoutProgramId}`}>{program.name}</Link>
						</td>
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
	);
}
