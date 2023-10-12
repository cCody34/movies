import { Show } from "../types";

interface ITVCard {
  show: Show;
}

export const TVCard = ({ show }: ITVCard) => {
  return (
    <>
      <h3>{show.name}</h3>
      <p>Summary: </p>
      <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
      {show.network ? <p>Network: {show.network.name}</p> : <></>}
      {show.webChannel ? <p>Web channel: {show.webChannel.name}</p> : <></>}
    </>
  );
};
