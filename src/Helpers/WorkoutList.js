export async function workoutList() {
  const url =
    "https://afe2021fitness.azurewebsites.net/api/api/WorkoutPrograms";

  await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  }).then((res) =>
    res
      .json()
      .then((data) => {
        setIsLoading(false), setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      })
  );
}
