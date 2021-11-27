import { useState } from 'react';
import { addExercise, addExerciseToWorkoutProgram } from '../Helpers/ExercisesApi';

export function ExerciseForm({ workoutProgramId }) {
	const initialState = {
		name: '',
		description: '',
		sets: '',
		repetitions: '',
		time: '',
	};

	const [exercise, setExercise] = useState(initialState);

	function handleChange(event) {
		const target = event.target;
		const name = target.name;

		setExercise((exercise) => {
			return {
				...exercise,
				[name]: target.value,
			};
		});
		// console.log(exercise);
	}

	function handleSumbmit(event) {
		event.preventDefault();
		//TODO:
		// tilføj øvelse til WorkoutProgram man er under
		// create new exercise in backend for this user/ trainer?

		// make post call to backend
		// addExerciseToWorkoutProgram(workoutProgramId, { ...exercise });

		const exerciseBody = { ...exercise };
		console.log(exerciseBody);
		addExercise(workoutProgramId, exerciseBody);
		// addExercise(workoutProgramId, { ...exercise });
	}

	return (
		<div>
			<h3>Add Exercise to Workout Program: {workoutProgramId}</h3>
			<form onSubmit={handleSumbmit}>
				<label>
					Exercise:
					<input name="name" type="text" value={exercise.name} onChange={handleChange} />
				</label>
				<label>
					Description:
					<input name="description" type="text" value={exercise.description} onChange={handleChange} />
				</label>
				<label>
					Set:
					<input name="sets" type="text" value={exercise.sets} onChange={handleChange} />
				</label>
				<label>
					Reps:
					<input name="repetitions" type="text" value={exercise.repetitions} onChange={handleChange} />
				</label>
				<label>
					Time:
					<input name="time" type="text" value={exercise.time} onChange={handleChange} />
				</label>
				<input type="submit" value="Add Exercise" />
			</form>
		</div>
	);
}
