import { ExerciseForm } from "./ExerciseForm";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useLocation } from "react-router";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	exercises: {
		margin: '32px 20px'
	},
	multirow: {
		columnCount: 3,
		textAlign: 'left'
	},
})

export function WorkoutProgramDetails() {
  const [state, setState] = useState({ workoutDetails: [] });
  const { workoutProgramId } = useParams();
  const classes = useStyles();
	const location = useLocation();
	const workoutProgram = location.state;

  const currentJwtToken = localStorage.getItem("jwtToken");

  const config = {
    headers: {
      Authorization: `Bearer ${currentJwtToken}`,
    },
  };

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get(
//         `https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms/${workoutProgramId}`,
//         config
//       );
//       setState({ workouts: result.state });
//       console.log(state.workoutDetails);
//     };
//     fetchData();
//   }, []);

  return (
    <div>
      <h2>Workout Program: {workoutProgramId}</h2>
        <div class="flex-container">
          <p>
            Workout id: {workoutProgram.workoutProgramId} Name: {workoutProgram.name} Description:{" "}
            {workoutProgram.description}
          </p>
        </div>
      <ExerciseForm workoutProgramId={workoutProgramId} />
			<div className={classes.exercises}>
				<h3>Exercises for workoutProgram: </h3>
				<div className={classes.multirow}>
					{workoutProgram.exercises.map((exercise) => (
						<li key={exercise.exerciseId}>{exercise.name}</li>
					))}
				</div>
			</div>
    </div>
  );
}
