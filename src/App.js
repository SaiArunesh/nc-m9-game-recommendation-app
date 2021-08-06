import "./styles.css";
import NavLink from "./NavLink";
import ItemDescription from "./ItemDesription";
import gamesDb from "./gamesDb";
import { useState } from "react";

export default function App() {
  const [genre, setGenre] = useState("RPG");
  function handleChangeLink(link) {
    setGenre(link);
    console.log("Link Changed ", link);
  }
  return (
    <div className="App">
      <h1>epic-y games</h1>
      {Object.keys(gamesDb).map((val, index) => (
        <NavLink key={index} link={val} onChangeLink={handleChangeLink} />
      ))}

      {gamesDb[genre].map((game) => (
        <ItemDescription
          key={game.title}
          title={game.title}
          description={game.description}
        />
      ))}
    </div>
  );
}
