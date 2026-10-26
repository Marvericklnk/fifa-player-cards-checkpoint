import Player from "./Player.jsx";
import players from "./players.js";

function PlayersList() {
  return (
    <div className="row g-4">
      {players.map((player) => (
        <div className="col-12 col-sm-6 col-xl-3" key={player.name}>
          <Player {...player} />
        </div>
      ))}
    </div>
  );
}

export default PlayersList;
