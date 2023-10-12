interface IPersonSearch {
  setPersonSearch: (value: string) => void;
}

export const PersonSearch = ({ setPersonSearch }: IPersonSearch) => {
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
