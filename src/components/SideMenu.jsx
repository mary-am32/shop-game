import React, { useState } from "react";
import "./sidemenu.css";
import NavListData from "../data/NavListData";
import NavListItem from "./NavListItem";
import Social from "./Social";
import Socialdata from "../data/Socialdata";

function SideMenu({ active , sectionactive}) {
  const [navData, setnavData] = useState(NavListData);
  const [social, setsocial] = useState(Socialdata);
// a func to change the active class on sidemenu
  const handlenavonclick = (id, target) => {
    
    const newnavdata = navData.map((nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setnavData(newnavdata);
    sectionactive(target)
  };

  return (
    <div className={`sidemenu ${active ? "active" : undefined}`}>
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>{" "}
      </a>
      <ul className="nav">
        {navData.map((item) => (
          <NavListItem
            key={item._id}
            item={item}
            navOnClick={handlenavonclick}
          />
        ))}
      </ul>

      <ul className="social">
        {social.map((item) => (
          <Social key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
