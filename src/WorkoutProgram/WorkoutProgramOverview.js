import React, { useState, useEffect } from "react";
import axios from "axios";

export function UseAxios() {
  const [data, setData] = useState({ hits: [] });

  localStorage.setItem("jwtToken", jwtToken);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Beare ${jwtToken}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://afe2021fitness.azurewebsites.net/api/WorkoutPrograms",
        config
      );

      setData(([hits] = result.data));
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.hits.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
