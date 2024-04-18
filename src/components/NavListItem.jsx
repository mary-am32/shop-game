import React from "react";

function NavListItem({ item, navOnClick }) {
  return (
        //class for active class on sidemenu and stay active
    <div>
      <li>
        <a
          href="#"
          className={`${item.active ? "active" : undefined}`}
          onClick={() => navOnClick(item._id, item.target)}
        >
          <i className={`bi ${item.icon}`}></i>
          <span className="navname">{item.name}</span>
        </a>
      </li>
    </div>
  ); 
}

export default NavListItem;
