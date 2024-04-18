import React, { useContext } from "react";
import "./gamecard.css";
import GameRating from "./GameRating";
import { AppContext } from "../App";
function GameCard({ game }) {
  const { library, setLibrary, bag, setBag } = useContext(AppContext);

  //add to library
  const handleaddtolibrary = (game) => {
    setLibrary([...library, game]);
  };

  const handleremovefromlibrary = (game) => {
    setLibrary(library.filter((item) => item._id !== game._id));
  };

  const handleaddtobag = (game) => {
    if (bag.includes(game)) return;
    setBag([...bag, game]);
  };

   
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gamecard">
        <img src={game.img} alt={game.title} className="img-fluid" />
        <a
          href="#"
          className={`like ${library.includes(game) ? "active" : undefined}`}
          onClick={
            library.includes(game)
              ? () => handleremovefromlibrary(game)
              : () => handleaddtolibrary(game)
          }
        >
          <i className="bi bi-heart-fill"></i>
        </a>
        <div className="gamefeature">
          <span className="gametype">{game.level}</span>
          <GameRating rating={game.rating} />
        </div>
        <div className="gametitle mt-4 mb-3">{game.title}</div>
        <div className="gameprice">
          {game.discount != 0 && (
            <>
              <span className="discount">
                <i>{game.discount * 100}%</i>
              </span>
              <span className="prevprice">${game.price.toFixed(2)}</span>
            </>
          )}
          <span className="currentprice">
            ${((1 - game.discount) * game.price).toFixed(2)}
          </span>
        </div>
        <a href="#" className="addbag" onClick={()=>handleaddtobag(game)}>
          <i className="bi bi-bag-plus-fill"></i>
        </a>
      </div>
    </div>
  );
}

export default GameCard;
