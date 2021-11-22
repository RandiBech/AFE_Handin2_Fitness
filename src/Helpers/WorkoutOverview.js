export async function workoutOverview() {
  const url = "https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms";

  await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  })
    .then((res) => res.json())
    .then((data) => localStorage.setItem("jwtToken", data.jwt));
}
