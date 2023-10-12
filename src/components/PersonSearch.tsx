import { useState } from "react";

interface IPersonSearch {
  setPersonSearch: (value: string) => void;
}

export const PersonSearch = ({ setPersonSearch }: IPersonSearch) => {
  const [personSearchInput, setPersonSearchInput] = useState<string>("");
  const handlePersonSearch = (event: React.MouseEvent) => {
    event.preventDefault();
    setPersonSearch(personSearchInput);
    setPersonSearchInput("");
  };

  return (
    <form>
      <label>
        Search people:
        <input
          value={personSearchInput}
          onChange={(event) => {
            setPersonSearchInput(event.target.value);
          }}
        ></input>
      </label>
      <button onClick={handlePersonSearch}>Search</button>
    </form>
  );
};
