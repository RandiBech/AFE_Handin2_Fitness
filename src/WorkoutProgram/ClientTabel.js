import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

export function ClientTabel({ workoutPrograms }) {
	const navigate = useNavigate();

	return (
		<div>
			{/* {workoutPrograms.length == 1 ? (
				navigate(`/workoutPrograms/${workoutPrograms[0].workoutProgramId}`)
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
			{/* )} */}
		</div>
	);
}
