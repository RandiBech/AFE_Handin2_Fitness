import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkoutList() {
  const [data, setData] = useState({ workouts: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {data.workouts.map((item) => (
        <li key={item.workoutProgramId}>
          <a href={item.name}>{item.description}</a>
        </li>
      ))}
    </ul>
  );
}

export default WorkoutList;
