import React from "react";
import './Menu.css'
import MenuItem from "./MenuItem";
function Menu() {
  return <div className="menu">
      <MenuItem title='Existing Inventory' />
      <MenuItem title='Used Inventory' />
      <MenuItem title='Urade-In' />
      <MenuItem title='Cybertruck' />
      <MenuItem title='Roadster' />
      <MenuItem title='Semi' />
      <MenuItem title='Charging' />
      <MenuItem title='Powerwall' />
      <MenuItem title='Commercial Solar' />
      <MenuItem title='Test Drive' />
      <MenuItem title='Find Us' />
      <MenuItem title='Support' />
      <MenuItem title='united states' />
  </div>;
}

export default Menu;
