export async function getWorkoutPrograms() {
	const url = 'https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms/trainer';

	await fetch(url, {
		method: 'GET',
	}).then((res) => res.json());
}
