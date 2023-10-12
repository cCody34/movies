import { searchPeople } from "../api";
import { Person } from "../types";
import { PersonCard } from "./PersonCard";
import { useEffect, useState } from "react";

interface IPersonList {
  personSearch: string;
}

export const PersonList = ({ personSearch }: IPersonList) => {
  const [people, setPeople] = useState<Array<Person>>([]);

  useEffect(() => {
    searchPeople(personSearch)
      .then(({ data }) => {
        setPeople(data);
      })
      .catch((err) => {
        console.log(err, "PersonListErr");
      });
  }, [personSearch]);

  return (
    <>
      <h3>PERSON LIST HERE</h3>
      {people.map(({ person }) => {
        return <PersonCard person={person} key={person.id} />;
      })}
    </>
  );
};
