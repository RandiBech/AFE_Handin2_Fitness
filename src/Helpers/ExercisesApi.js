import axios from 'axios';

export async function addExerciseToWorkoutProgram(programId, exercise) {
	const url = `https://afe2021fitness.azurewebsites.net/api/exercises/program/${programId}`;
	const token = localStorage.getItem('jwtToken');

	await fetch(url, {
		method: 'POST',
		headers: [{ 'Content-Type': 'application/json' }, { Authorization: `Bearer ${token}` }],
		body: JSON.stringify({
			name: exercise.name,
			description: exercise.description,
			sets: exercise.sets,
			repetitions: exercise.repetitions,
			time: exercise.time,
		}),
	}).then((res) => res.json());
}

export async function addExercise(programId, exercise) {
	const jwtToken = localStorage.getItem('jwtToken');
	const config = {
		headers: { Authorization: `Bearer ${jwtToken}` },
	};

	console.log(`exercise: ${JSON.stringify({ ...exercise })}`);
	try {
		const resp = await axios.post(
			`https://afe2021fitness.azurewebsites.net/api/exercises/program/${programId}`,
			{ ...exercise },
			config
		);
		console.log(resp.data);
	} catch (err) {
		console.error(err);
	}
}
