import { PersonList } from "../PersonList";
import { PersonSearch } from "../PersonSearch";
import { useState } from "react";

export const People = () => {
  const [personSearch, setPersonSearch] = useState<string>("");
  return (
    <>
      <PersonSearch setPersonSearch={setPersonSearch} />
      {personSearch ? <PersonList personSearch={personSearch} /> : <></>}
    </>
  );
};
