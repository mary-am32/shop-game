import React, { useState } from "react";
import "./categories.css";
import filterListData from "../data/filterListData";
import GameCard from "../components/GameCard";

function Categories({ games, reference }) {
  const [data, setData] = useState(games);

  const [filters, setfilters] = useState(filterListData);
  const handlefiltergame = (category) => {
    //active the active func

    setfilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );
    //for the saerch
    if (category === "all") {
      setData(games);
      return;
    }
    setData(games.filter((game) => game.category === category));
  };
  //for the saerch
  const [text, setText] = useState("");

  const handlesearchgames = (e) => {
    setData(
      games.filter((game) =>
        game.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setText(e.target.value);
  };

  return (
    <section id="categories" className="categories" ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-8 d-flex align-items-center justify-content-start">
            <ul className="filters">
              {filters.map((filter) => (
                <li
                  key={filter._id}
                  className={`${filter.active ? "active" : undefined}`}
                  onClick={() => handlefiltergame(filter.name)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            <div className="search">
              <i class="bi bi-search"></i>
              <input
                type="text"
                name="search"
                autoComplete="off"
                value={text}
                placeholder="search"
                onChange={handlesearchgames}
              />
            </div>
          </div>
        </div>

        <div className="row">
          {data.map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
