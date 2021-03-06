export async function getWorkoutPrograms(jwtToken) {
	const url = 'https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms/trainer';

	return await fetch(url, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json',
                    'Authorization': "Bearer " + jwtToken },
	}).then((res) => res.json());
}


export async function addWorkoutProgramForClient(request, jwtToken) {
	const url = 'https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms'

	await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json',
					'Authorization': "Bearer " + jwtToken },
		body: JSON.stringify(request)
	})
	.then(res => res.json())
}