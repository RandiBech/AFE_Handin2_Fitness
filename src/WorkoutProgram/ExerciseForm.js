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

	const [state, setState] = useState(initialState);

	function handleChange(event) {
		const target = event.target;
		const name = target.name;

		setState((state) => {
			return {
				...state,
				[name]: target.value,
			};
		});
	}

	function handleSumbmit(event) {
		alert('exercise: ' + state.name + '. Description: ' + state.description + '. Sets: ' + state.sets);
		// TODO:
		// tilføj øvelse til WorkoutProgram man er under
		// create new exercise in backend?

		// make post call to backend
		// await addExerciseToWorkoutProgram(state); // mangler WorkoutProgram ID
	}

	return (
		<form onSubmit={handleSumbmit}>
			<h3>Add Exercise to Workout Program</h3>
			<div>
				<label>
					Exercise:
					<input name="name" type="text" value={state.name} onChange={handleChange} />
				</label>
				<label>
					Description:
					<input name="description" type="text" value={state.description} onChange={handleChange} />
				</label>
				<label>
					Set:
					<input name="sets" type="text" value={state.sets} onChange={handleChange} />
				</label>
				<label>
					Reps:
					<input name="repetitions" type="text" value={state.repetitions} onChange={handleChange} />
				</label>
				<label>
					Time:
					<input name="time" type="text" value={state.time} onChange={handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</div>
		</form>
	);
}
