import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	workouts: {
		padding: '0 20px',
		borderCollapse: 'collapse',
		width: '100%',
		border: '3px solid #ddd',
		textAlign: 'left',
		margin: '8px 0',
	},
	workoutItem: {
		textAlign: 'left',
		padding: '8px 4px',
		cursor: 'pointer',
		border: '3px solid #ddd'
	},
	multirow: {
		columnCount: 3,
		border: '1px solid #ddd'
	},
	td: {
		border: '1px solid #ddd'
	}
})

export function ClientTabel({ workoutPrograms }) {
    const navigate = useNavigate();
    const classes = useStyles();

	return (
		<div>
			{workoutPrograms.length === 1 ? (
				navigate(`/workoutPrograms/${workoutPrograms[0].workoutProgramId}`, {state: workoutPrograms[0]})
			) : (
			<table className={classes.workouts}>
				<thead>
					<tr>
						<th className={classes.td}>Program</th>
						<th className={classes.td}>Description</th>
						<th className={classes.td}>Exercises</th>
					</tr>
				</thead>
				<tbody>
					{workoutPrograms.map((program) => (
						<tr key={program.workoutProgramId} className={classes.workoutItem}>
							<td className={classes.td}>
								<Link to={`/workoutPrograms/${program.workoutProgramId}`} state={program}>{program.name}</Link>
							</td>
							<td className={classes.td}>{program.description}</td>
							<td className={classes.multirow}>
								{program.exercises.map((exercise) => (
									<li key={exercise.exerciseId}>{exercise.name}</li>
								))}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		)}
		</div>
	);
}
