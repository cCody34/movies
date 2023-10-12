import { useState } from "react";

interface IPersonSearch {
  setPersonSearch: (value: string) => void;
}

export const PersonSearch = ({ setPersonSearch }: IPersonSearch) => {
  const [personSearchInput, setPersonSearchInput] = useState<string>("");
  return (
    <form>
      <label>
        Search people:
        <input></input>
      </label>
      <button>Search</button>
    </form>
  );
};
