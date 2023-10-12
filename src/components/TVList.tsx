import { searchShows } from "../api";
import { Show } from "../types";
import { TVCard } from "./TVCard";
import { useEffect, useState } from "react";

interface ITVList {
  showSearch: string;
}

export const TVList = ({ showSearch }: ITVList) => {
  const [shows, setShows] = useState<Array<Show>>([]);

  useEffect(() => {
    searchShows(showSearch)
      .then(({ data }) => {
        setShows(data);
      })
      .catch((err) => {
        console.log(err, "TVListError");
      });
  }, [showSearch]);

  return (
    <>
      <h3>TV LIST HERE</h3>
      {shows.map(({ show }) => {
        return <TVCard show={show} key={show.id} />;
      })}
    </>
  );
};
