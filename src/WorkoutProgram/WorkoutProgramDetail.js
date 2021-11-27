import { ExerciseForm } from "./ExerciseForm";
import { useParams } from "react-router-dom";

export function WorkoutProgramDetails() {
  const { workoutProgramId } = useParams();

  return (
    <div>
      <h1>WorkoutProgramDetails</h1>
      <h2>Workout Program: {workoutProgramId}</h2>
      <ExerciseForm workoutProgramId={workoutProgramId} />
    </div>
  );
}
