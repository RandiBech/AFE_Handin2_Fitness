import { ExerciseForm } from './ExerciseForm';
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	exercises: {
		margin: '32px 20px'
	},
	multirow: {
		columnCount: 3,
		textAlign: 'left'
	},
})

export function WorkoutProgramDetails() {
	const classes = useStyles();
	const { workoutProgramId } = useParams();
	const location = useLocation();
	const workoutProgram = location.state;
	console.log('detail', workoutProgram)
	return (
		<div>
			<h1>WorkoutProgramDetails</h1>
			<h2>Workout Program: {workoutProgram.name}, {workoutProgramId}</h2>
			<p>Belongs to client with ID: {workoutProgram.clientId}</p>
			<ExerciseForm workoutProgramId={workoutProgramId} />
			<div className={classes.exercises}>
				<h3>Exercises for workoutProgram: </h3>
				<div className={classes.multirow}>
					{workoutProgram.exercises.map((exercise) => (
						<li key={exercise.exerciseId}>{exercise.name}</li>
					))}
				</div>
			</div>
		</div>
	);
}
