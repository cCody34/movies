import { PersonInfo } from "../types";

interface IPersonCard {
  person: PersonInfo;
}

export const PersonCard = ({ person }: IPersonCard) => {
  return <p>Person Card</p>;
};
