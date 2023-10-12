import { Show } from "../types";

interface ITVCard {
  show: Show;
}

export const TVCard = ({ show }: ITVCard) => {
  console.log(show, "SHOOWWW");
  return (
    <>
      <h3>{show.name}</h3>
      <p>Summary: </p>
      <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
      {show.network ? <p>Network: {show.network.name}</p> : <></>}
      {show.webChannel ? <p>Web channel: {show.webChannel.name}</p> : <></>}
      {show.genres.length ? (
        <>
          <h4>Genres:</h4>
          {show.genres.map((genre) => {
            return <p key={`${show.id}-${genre}`}>{genre}</p>;
          })}
        </>
      ) : (
        <></>
      )}
      {show.type ? <p>Type: {show.type}</p> : <></>}
    </>
  );
};
