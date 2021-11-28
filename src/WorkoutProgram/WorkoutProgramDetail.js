import { ExerciseForm } from "./ExerciseForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";

export function WorkoutProgramDetails() {
  const [state, setState] = useState({ workoutDetails: [] });
  const { workoutProgramId } = useParams();

  const currentJwtToken = localStorage.getItem("jwtToken");

  const config = {
    headers: {
      Authorization: `Bearer ${currentJwtToken}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms/${workoutProgramId}`,
        config
      );
      setState({ workouts: result.state });
      console.log(state.workoutDetails);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Workout Program: {workoutProgramId}</h2>

      {state.workoutDetails.map((item) => (
        <div class="flex-container">
          <p>
            Workout id: {item.workoutProgramId} Name: {item.name} Description:{" "}
            {item.description}
          </p>
        </div>
      ))}
      <ExerciseForm workoutProgramId={workoutProgramId} />
    </div>
  );
}
