import React from "react";
import { Link, NavLink } from "react-router-dom";

export function TrainerTabel({ workoutPrograms }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Press for details</th>
          <th>Client</th>
          <th>Program</th>
          <th>Description</th>
          <th>Exercises</th>
        </tr>
      </thead>
      <tbody>
        {workoutPrograms.map((program) => (
          <tr key={program.workoutProgramId}>
            <td>
              <Link to={`/workoutDetails/${program.workoutProgramId}`}>
                <button>Details</button>
              </Link>
            </td>
            <td>{program.clientId}</td>
            <td>
              {/* <Link to={`/workoutprograms/${program.workoutProgramId}`}>{program.name}</Link> */}
              <Link to={`/workoutDetails/${program.workoutProgramId}`}>
                {program.name}
              </Link>
            </td>
            <td>{program.description}</td>
            <td>
              {program.exercises.map((exercise) => (
                <li key={exercise.exerciseId}>{exercise.name}</li>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
