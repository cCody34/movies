import { searchPeople } from "../api";
import { Person } from "../types";
import { PersonCard } from "./PersonCard";
import { useEffect, useState } from "react";

export const PersonList = () => {
  const [people, setPeople] = useState<Array<Person>>([]);

  useEffect(() => {
    searchPeople("Ellen").then(({ data }) => {
      setPeople(data);
    }).catch((err) => {
      console.log(err, "PersonListErr")
    })
  }, []);

  return (
    <>
      <h3>PERSON LIST HERE</h3>
      <PersonCard></PersonCard>
      <PersonCard></PersonCard>
      <PersonCard></PersonCard>
    </>
  );
};
