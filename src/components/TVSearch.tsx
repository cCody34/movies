import { useState } from "react";

interface ITVSearch {
  setShowSearch: (value: string) => void;
}

export const TVSearch = ({ setShowSearch }: ITVSearch) => {
  const [showSearchInput, setShowSearchInput] = useState<string>("");
  const handleTVSearch = (event: React.MouseEvent) => {
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
      <button onClick={handleTVSearch}>Search</button>
    </form>
  );
};
