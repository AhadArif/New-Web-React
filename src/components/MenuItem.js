import React from "react";
import { MenuList } from "../Lists/MenuList";
import "../styles/Menu.css";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Clicks</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.title}    // note `title` here
            price={menuItem.price}
          />
        ))}
      </div>
      <p className="priceNote">Price may vary according to need</p>
    </div>
  );
}

export default Menu;
