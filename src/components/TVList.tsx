import { searchShows } from "../api";
import { TVCard } from "./TVCard";
import { useEffect, useState } from "react";

interface ITVList {
  showSearch: string;
}

export const TVList = ({ showSearch }: ITVList) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    searchShows(showSearch)
      .then(({ data }) => {
        setShows(data);
        console.log(shows);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h3>TV LIST HERE</h3>
      {shows.map(() => {
        return <TVCard />;
      })}
    </>
  );
};
