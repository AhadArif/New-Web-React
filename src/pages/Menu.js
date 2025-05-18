import React from "react";
import { MenuList } from "../Lists/MenuList";  // Ensure this path is correct
import "../styles/Menu.css";  // Your CSS file import

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Clicks</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <div className="menuItem" key={key}>
            <div style={{ backgroundImage: `url(${menuItem.image})` }}></div>
            <h1>{menuItem.title}</h1>
            <p>₹{menuItem.price}</p>
          </div>
        ))}
      </div>
      <div classNme="priceNote">Note:Price may vary according to the type and need</div>
    </div>
  );
}

export default Menu;
