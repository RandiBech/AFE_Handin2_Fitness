// import React, { useEffect, useState } from "react";
// import { workoutList } from "../Helpers/WorkoutList";

// function WorkoutList() {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   async function handleList() {
//     await workoutList();
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);
//   if (isLoading) {
//     return <div>Loading....</div>;
//   }
//   return (
//     <div>
//       <h1>Workout Overview</h1>
//       {data}
//       {isError && <div>Error fetching data...</div>}
//     </div>
//   );
// }

import axios from "axios";
import React, { useEffect, useState } from "react";
import { workoutList } from "../Helpers/WorkoutList";

function WorkoutList() {
  const [data, setData] = useState([]);

  const fetchWorkoutList = () => {
    axios
      .get("https://afe2021fitness.azurewebsites.net/api/api/WorkoutPrograms")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Workout Overview</h1>
    </div>
  );
}
export default WorkoutList;
