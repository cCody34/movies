import { Person } from "../types";
import { PersonCard } from "./PersonCard";
import { useState } from "react";

export const PersonList = () => {
  const [people, setPeople] = useState<Array<Person>>([]);

  return (
    <>
      <h3>PERSON LIST HERE</h3>
      <PersonCard></PersonCard>
      <PersonCard></PersonCard>
      <PersonCard></PersonCard>
    </>
  );
};
