import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function ClientTabel({ workoutPrograms }) {
	return (
		<table>
			<thead>
				<tr>
					<th>Program</th>
					<th>Description</th>
					<th>Exercises</th>
				</tr>
			</thead>
			<tbody>
				{workoutPrograms.map((program) => (
					<tr key={program.workoutProgramId}>
						<td>
							{workoutPrograms.length == 1 ? (
								<NavLink to={`/details/${program.workoutProgramId}`} />
							) : (
								<Link to={`/details/${program.workoutProgramId}`}>{program.name}</Link>
							)}
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
