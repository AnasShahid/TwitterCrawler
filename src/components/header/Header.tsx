import React from "react";
import SearchBar from "../search-bar/SearchBar";
import MenuItems from "../../example/dynamic-routing/config/RouteConfig";
import { Menu, MenuLink, Nav, NavbarContainer } from "./NavbarStyle";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <Menu>
            {MenuItems.map((menuItem) => (
              <MenuLink key={menuItem.title} to={menuItem.path}>
                {menuItem.title + " "}
              </MenuLink>
            ))}
          </Menu>
          <div>
            <SearchBar />
          </div>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
