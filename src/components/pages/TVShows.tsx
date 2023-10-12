import { TVList } from "../TVList";
import { useState } from "react";
import { TVSearch } from "../TVSearch";

export const TVShows = () => {
  const [showSearch, setShowSearch] = useState<string>("");
  return (
    <>
      <TVSearch setShowSearch={setShowSearch} />
      {showSearch ? <TVList showSearch={showSearch} /> : <></>}
    </>
  );
};
