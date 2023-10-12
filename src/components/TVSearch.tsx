import { useState } from "react";

interface ITVSearch {
  setShowSearch: (value: string) => void;
}

export const TVSearch = ({ setShowSearch }: ITVSearch) => {
  const [showSearchInput, setShowSearchInput] = useState<string>("");
  const handleSearchSubmit = (event: any) => {
    event.preventDefault();
    setShowSearch(showSearchInput);
    setShowSearchInput("");
  };

  return (
    <form>
      <label>
        Search shows by title:
        <input
          type="text"
          value={showSearchInput}
          onChange={(event) => {
            setShowSearchInput(event.target.value);
          }}
        ></input>
      </label>
      <button onClick={handleSearchSubmit}>Search</button>
    </form>
  );
};
