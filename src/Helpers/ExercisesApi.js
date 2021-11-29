import axios from 'axios';

export async function addExercise(programId, exercise, jwtToken) {
	const config = {
		headers: { Authorization: `Bearer ${jwtToken}` },
	};

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
