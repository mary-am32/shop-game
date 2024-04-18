import React from "react";

function Social({ item }) {
  return (
    <div>
      <li>
        <a href="#">
          <i className={`bi${item.Icon}`}></i>
        </a>
      </li>
    </div>
  );
}

export default Social;
