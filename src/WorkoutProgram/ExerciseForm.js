import { useState } from 'react';
import { addExercise } from '../Helpers/ExercisesApi';
import { useAuthContext } from "../Context/auth-context";

export function ExerciseForm({ workoutProgramId }) {
	const { jwtToken } = useAuthContext();

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
	}

	function handleSumbmit(event) {
		event.preventDefault();
		const exerciseBody = { ...exercise };
		addExercise(workoutProgramId, exerciseBody, jwtToken);
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
					<input name="sets" type="number" value={exercise.sets} onChange={handleChange} />
				</label>
				<label>
					Reps:
					<input name="repetitions" type="number" value={exercise.repetitions} onChange={handleChange} />
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
