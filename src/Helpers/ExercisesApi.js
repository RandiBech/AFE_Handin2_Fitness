export async function addExerciseToWorkoutProgram(programId, exercise) {
	const url = `https://afe2021fitness.azurewebsites.net/api/exercises/program/${programId}`;

	await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			name: exercise.name,
			description: exercise.description,
			sets: exercise.sets,
			repetitions: exercise.repetitions,
			time: exercise.time,
		}),
	}).then((res) => res.json());
}
