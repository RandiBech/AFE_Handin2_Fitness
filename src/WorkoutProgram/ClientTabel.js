import React from 'react';

export function ClientTabel(props) {
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
				{props.workoutPrograms.map((program) => (
					<tr key={program.workoutProgramId}>
						<td>
							<a href={program.workoutProgramId}>{program.name}</a>
							{/* {program.name} */}
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
