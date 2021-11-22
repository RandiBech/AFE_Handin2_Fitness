import React from 'react';

export function TrainerTabel(props) {
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
				{props.workoutPrograms.map((program) => (
					<tr key={program.workoutProgramId}>
						<td>{program.clientId}</td>
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
	);
}
