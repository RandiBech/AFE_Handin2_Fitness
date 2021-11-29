import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkoutOverview() {
  const [data, setData] = useState({ workouts: [] });
  const currentJwtToken = localStorage.getItem("jwtToken");

  const config = {
    headers: {
      Authorization: `Bearer ${currentJwtToken}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms",
        config
      );
      setData({ workouts: result.data });
    };
    fetchData();
  }, []);

  return (
    <ul>
      <h3>Workout program: </h3>

      {data.workouts.map((item) => (
        <div class="flex-container">
          <p>
            Workout id: {item.workoutProgramId} Name: {item.name} Description:{" "}
            {item.description}
          </p>
        </div>
      ))}
    </ul>
  );
}

export default WorkoutOverview;
