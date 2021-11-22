import { useState } from 'react';
import { addExerciseToWorkoutProgram } from '../Helpers/ExercisesApi';

export function ExerciseForm() {
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
		console.log(exercise);
	}

	function handleSumbmit(event) {
		alert('exercise: ' + exercise.name + '. Description: ' + exercise.description + '. Sets: ' + exercise.sets);
		event.preventDefault();
		//TODO:
		// tilføj øvelse til WorkoutProgram man er under
		// create new exercise in backend for this user/ trainer?

		// const programId = ???? // hvordan får jeg fat i state for workoutProgramId?

		// make post call to backend
		// addExerciseToWorkoutProgram(programId, { ...exercise });
	}

	return (
		<form onSubmit={handleSumbmit}>
			<h3>Add Exercise to Workout Program</h3>
			<div>
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
				<input type="submit" value="Submit" />
			</div>
		</form>
	);
}
