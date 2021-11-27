import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export function ClientTabel({ workoutPrograms }) {
	return (
		<div>
			{/* {workoutPrograms.length = 1 ? (
				<Redirect to={`/workoutPrograms/${workoutPrograms[0].workoutProgramId}`} />
			) : ( */}
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
								<Link to={`/workoutPrograms/${program.workoutProgramId}`}>{program.name}</Link>
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
			{/* ) */}
		</div>
	);
}
