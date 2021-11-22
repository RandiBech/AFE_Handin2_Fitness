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
  console.log("config", config);

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
      {data.workouts.map((item) => (
        <li key={item.workoutProgramId}>{item.name}</li>
      ))}
    </ul>
  );
}

export default WorkoutOverview;
